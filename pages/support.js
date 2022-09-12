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
        <p>Over the past three years we have gotten so much positive feedback from the community with regards to the space. During the pandemic people entrusted us as a place that they can go be friends, see music, bask in the lights, and feel safe.  We'd love even more of an opportunity to build on that and create something even more unique and awe inspiring in one of the last remaining undeveloped properties in Durham's DIY district.</p>
        {/* <iframe src="/"></iframe> */}
        <p>Currently our biggest need is a new PA system that can live at the space and let us continue to provide great production. We are going to be purchasing a system that will cost about $10,000. Please support the cause and donate below. Even a couple dollars can move the needle for us. Any donation will get you a free sticker. All donations over 25$ will also get you into a show of your choosing. All donatings over $50, will get you a +1. Just let us know when you are coming by</p>
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