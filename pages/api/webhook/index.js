import Stripe from 'stripe';
import { buffer } from 'micro';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let event;
    const rawBody = await buffer(req);
    console.log('RAW BODY',  process.env.STRIPE_WEBHOOK_SECRET)
    const signature = req.headers['stripe-signature'];
    const newBody =  rawBody.toString();
    try {
   
      event = stripe.webhooks.constructEvent(
        newBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).json({ message: `Webhook Error: ${err.message}` });
      return;
    }
    if (event.type === 'checkout.session.completed') {
      console.log(`💰  Payment received!`, event);
      res.json({ event: event, message: 'SUCCESS' });
    } else {
      console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`);
    }

    // Return a response to acknowledge receipt of the event.
    res.json({ received: true });
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).json({ message: 'Method not allowed' });
  }
}