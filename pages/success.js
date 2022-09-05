import React, {useEffect} from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import styles from '../styles/Support.module.css'

const Success = () => {
  const {
    query: { session_id },
  } = useRouter();
  
  // useEffect(() => {
  //   if (data) {
  //     shootFireworks();
  //     clearCart();
  //   }
  // }, [data]);

  useEffect(() => {
   (async ()=> {
    try {
      const data = await axios.get(`/api/checkout_sessions/${session_id}`)
      console.log('Success', data)
    } catch(e) {
      console.log('ERROR', e.message)
    }    
   })()
  }, []);
 

  return (
    <div className={styles.supportPage}>
      <div>HELL YEAH THANK YOU SO FUCKING MUCH!</div>
    </div>
  );
}

export default Success;