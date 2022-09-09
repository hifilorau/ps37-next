import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  
  try {
    // const result = await someAsyncOperation()
    console.log('HIT THAT POINT')
    const balanceTransactions = await stripe.balanceTransactions.list({
      limit: 3,
    });
    console.log('transactions', balanceTransactions.data)
    // const stJSON = await stResponse.json()
    const data = balanceTransactions.data
    // const response = {
     
    // }
    res.status(200).json(data)
  } catch (err) {
    console.log(err.message)
    res.status(500).json({ error: 'failed to load data' })
  }

}