import Stripe from 'stripe';
import { buffer } from 'micro';
import axios from 'axios';
import clientPromise from "../../../lib/mongodb";
import { postDonation } from '../donor';

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
    const signature = req.headers['stripe-signature'];
    // console.log('RAW BODY', JSON.parse(rawBody))
    const body = JSON.parse(rawBody)
    // console.log('OTHERSTUFF', body)
    const newBody =  body.data.object
    // console.log('NEW BODY', newBody)
    const secret = process.env.STRIPE_WEBHOOK_SECRET
    try {
      await postToMongo(newBody, res)
      console.log('POSTED BEFORE EVENT')
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        secret
      );
      console.log('AFTER EVENT')
    } catch (err) {
      console.log(`❌ Error message: ${err.message}`);
      res.status(400).json({ message: `Webhook Error: ${err.message}` });
      return;
    }
    if (event.type === 'checkout.session.completed') {
      console.log(`💰  Payment received!`, event);
      const response = postToMongo(newBody, res)
      // res.json({ received: true });
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


const postToMongo = async (data, res) => {
  const customer = data.customer_details
      const obj = {
        amount: data.amount_total,
        currency: data.currency,
        stripe_name: customer.name,
        email: customer.email,
        transactionId: data.id,
        address: customer.address
      }
      console.log('MONGO OBJECT', obj)
      try {
        const response = await postDonation(obj)
        return response.value
      }
      catch (e) {
        console.log('ERROR', e.message)
      }
}