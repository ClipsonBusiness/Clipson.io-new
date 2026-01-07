import Stripe from 'stripe';

export default async function handler(req, res) {
  // Set CORS headers to allow requests from localhost during development
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Check if Stripe key is set BEFORE initializing Stripe
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey || stripeKey.trim() === '') {
    console.error('STRIPE_SECRET_KEY is not set in environment variables');
    const allEnvKeys = Object.keys(process.env).filter(k => k.includes('STRIPE'));
    return res.status(500).json({ 
      error: 'Server configuration error: Stripe secret key is missing. Please add STRIPE_SECRET_KEY to Vercel environment variables.',
      debug: {
        availableStripeVars: allEnvKeys,
        keyExists: !!process.env.STRIPE_SECRET_KEY,
        keyLength: process.env.STRIPE_SECRET_KEY ? process.env.STRIPE_SECRET_KEY.length : 0,
        instructions: 'Go to Vercel → Settings → Environment Variables → Add STRIPE_SECRET_KEY for Production, Preview, and Development'
      }
    });
  }

  // Initialize Stripe with the secret key (trim any whitespace)
  const stripe = new Stripe(stripeKey.trim());

  try {
    const { name, email, amount, baseAmount, spending, discordAnnouncement } = req.body;

    // Build line items for subscription (recurring monthly)
    const lineItems = [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Complete Access',
            description: 'Launch your clipping campaign - Monthly subscription',
          },
          unit_amount: Math.round(baseAmount || amount), // Amount in cents
          recurring: {
            interval: 'month', // Monthly subscription
          },
        },
        quantity: 1,
      },
    ];

    // Add Discord announcement if selected (only charge if not included for free)
    // Discord is free/included for spending < $2K OR >= $5K
    if (discordAnnouncement) {
      const spendingAmount = parseFloat(spending) || 0;
      const shouldBeFree = spendingAmount < 2000 || spendingAmount >= 5000;
      
      if (!shouldBeFree) {
        // Charge for Discord add-on (spending $2K-$5K only)
        lineItems.push({
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Discord Announcement',
              description: 'Announcement inside ClipSon\'s Discord - Brings campaigns a lot of clippers',
            },
            unit_amount: 3995, // $39.95 in cents (15% off from $47)
            recurring: {
              interval: 'month', // Monthly subscription
            },
          },
          quantity: 1,
        });
      }
      // If shouldBeFree is true, Discord is included - don't add as line item (it's free)
    }

    // Create Subscription Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'subscription', // Monthly subscription
      customer_email: email,
      metadata: {
        customer_name: name,
        discord_announcement: discordAnnouncement ? 'true' : 'false',
        monthly_amount: amount.toString(),
        spending: spending || '0',
      },
      subscription_data: {
        metadata: {
          customer_name: name,
          discord_announcement: discordAnnouncement ? 'true' : 'false',
        },
      },
      success_url: `${process.env.SUCCESS_URL || 'https://clipson.io'}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.CANCEL_URL || 'https://clipson.io'}/close-sale`,
    });

    return res.status(200).json({ 
      id: session.id,
      url: session.url // Return the checkout URL for direct redirect
    });
  } catch (error) {
    console.error('Error:', error);
    // Return detailed error for debugging
    return res.status(500).json({ 
      error: error.message,
      details: process.env.STRIPE_SECRET_KEY ? 'Stripe key is set' : 'STRIPE_SECRET_KEY is missing!'
    });
  }
}
