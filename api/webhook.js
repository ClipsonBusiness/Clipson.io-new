import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // For Vercel, get raw body from request
    const body = await getRawBody(req);
    event = stripe.webhooks.constructEvent(
      body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle subscription events
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      if (session.mode === 'subscription') {
        console.log('Subscription created:', session.id);
        // Handle new subscription - activate access, send welcome email, etc.
        // TODO: Add your logic here (e.g., update database, send email)
      }
      break;

    case 'customer.subscription.created':
      const subscription = event.data.object;
      console.log('Subscription activated:', subscription.id);
      // Activate user access
      // TODO: Add your logic here
      break;

    case 'customer.subscription.updated':
      const updatedSubscription = event.data.object;
      console.log('Subscription updated:', updatedSubscription.id);
      // Handle subscription changes (plan upgrade/downgrade, etc.)
      // TODO: Add your logic here
      break;

    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      console.log('Monthly payment succeeded:', invoice.id);
      // Handle successful monthly payment
      // TODO: Add your logic here
      break;

    case 'invoice.payment_failed':
      const failedInvoice = event.data.object;
      console.log('Monthly payment failed:', failedInvoice.id);
      // Handle failed payment - notify user, suspend access, etc.
      // TODO: Add your logic here
      break;

    case 'customer.subscription.deleted':
      const canceledSubscription = event.data.object;
      console.log('Subscription canceled:', canceledSubscription.id);
      // Handle subscription cancellation - revoke access, etc.
      // TODO: Add your logic here
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.json({ received: true });
}

// Helper function to get raw body for Vercel
async function getRawBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', () => {
      resolve(Buffer.from(data));
    });
    req.on('error', reject);
  });
}
