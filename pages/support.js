import React, {useState} from 'react'
import styles from '../styles/Support.module.css'
import axios from 'axios'
import getStripe from '../lib/get-stripe';
import Snow from '../components/Snow';
import Bike from '../components/Bike';
import { useEffect } from 'react';

const Support = () => {
  const env = process.env.NODE_ENV;
  const [dollars, setDollars] = useState(0)
  const redirectToCheckout = async () => {
    const {
      data: { id },
    } = await axios.post('/api/checkout_sessions', {
      items: [{price: env == "development" ? "price_1LgDlbBRoJeDfzTiUjsPw1Ks" : 'price_1LeehMBRoJeDfzTibapCyl8D', quantity: 1}]
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
    const sum= transactions.data.reduce((a, i) => {
      return a + i.amount
    }, 0)
    console.log('tran', sum)
    const dollars = (sum / 100).toLocaleString("en-US", {style:"currency", currency:"USD"});
    setDollars(dollars)
  })()
  
  },[])

  return (
    <div className={styles.supportPage}>
      <div className={styles.supportContent}>
        <h1>Dreaming the Life <span>        <button className={styles.button} onClick={redirectToCheckout}>DONATE NOW</button></span></h1>
        <div className={styles.donationStats}>
          <div className={styles.donationBox}>
            <h2>Current Goal</h2>
            <h2>$10,000</h2>
          </div>
          {dollars > 50000 && <div className={styles.donationBox}>
            <h2>Current Donations</h2>
            <h2>{dollars}</h2>
          </div> }
        </div>
        <p>Over the past three years we have gotten so much positive feedback from the community with regards to the space; there are no words that could ever adequately express our gratitude. People have entrusted us during a pandemic as a place that they can go be with friends, see music, bask in the lights, and just feel safe. We want to build on that, and are truly trying to build something unique, inclusive, wonderful, and awe inspiring in one of the last remaining undeveloped properties in Durham's DIY district. We strongly believe we are on the right path. But for us to continue to grow and thrive in Durham we need financial support. Sadly that means money, but we also promise to spend it 100% of it on more sound, more lights, more art, more paying fair wages to those who work here - and finally just doing more amazing, wild, and weird events with and for our community.</p>

        {/* <iframe src="/"></iframe> */}
        <p>Currently we desparately need to buy a new PA system that can live at the space. We are committed to providing great production, and are going to be purchasing a system that all told will cost us about $10,000. If you want to support the cause, please donate below. All donations over 25$ will also get you into a show of your choosing. All donatings over $50, will get you a +1.</p>
        <p>Thank you so much for your patronage.</p>
        <button className={styles.button} onClick={redirectToCheckout}>DONATE NOW</button>
      </div>
      {/* <div> */}
      <Bike />
      {/* </div> */}
      {/* <Snow /> */}
        {/* We believe PS37 can be one of the most inclusive and awe-inspiring places that exist in the world today. Through the combination of local artistic talent, technology, building, and the spirit and stucture of the space itself we can create a unique and lasting experience for art lovers, music lovers, and the community at large. To do that we need the support from the community. Here you will find links to donate in various ways or join our patreon. </p> */}
    </div>
  )
}

export default Support