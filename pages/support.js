import styles from '../styles/Support.module.css'
import axios from 'axios'
import getStripe from '../lib/get-stripe';
import Snow from '../components/Snow';
import { useEffect } from 'react';

const Support = () => {

  const redirectToCheckout = async () => {
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessions', {
      items: [{price: 'price_1LeehMBRoJeDfzTibapCyl8D', quantity: 1}]
      // items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
      //   price: id,
      //   quantity,
      // })),
    });
    const stripe = await getStripe();
    await stripe.redirectToCheckout({ sessionId: id });
  };

  useEffect(() => {
    
  (async() => {
    const transactions = await axios.get('/api/stripe')
    console.log('tran', transactions)
  })()
  
  },[])

  return (
    <div className={styles.supportPage}>
      <div className={styles.supportContent}>
        <h1>Dreaming the Life</h1>
        <p>PS37 is not a business. It is an artspace. It has never been and will never be about profit. But unfortunately our goals and what we want to do to make the space extraordinary cost a significant amount of cold hard US dollars. To that end, we need support - without support from the community we will never be able to grow the space into the place of wonder that we think it needs to be.</p>
        <p>Right now we need to buy a new PA system that can permanently live at the space. We are committed to providing great production, and are going to be purchasing a system that all told will cost us about $7,500. If you want to support the cause, please donate below. All donations over 25$ will also get you into a show of your choosing for free. All over $50, will get you a +1. Thank you so much for your patronage.</p>
        <button className={styles.button} onClick={redirectToCheckout}>DONATE</button>
      </div>
      {/* <div> */}
      <Snow />
      {/* </div> */}
      {/* <Snow /> */}
        {/* We believe PS37 can be one of the most inclusive and awe-inspiring places that exist in the world today. Through the combination of local artistic talent, technology, building, and the spirit and stucture of the space itself we can create a unique and lasting experience for art lovers, music lovers, and the community at large. To do that we need the support from the community. Here you will find links to donate in various ways or join our patreon. </p> */}
    </div>
  )
}

export default Support