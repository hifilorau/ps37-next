import React, {useEffect, useState, useRef} from 'react'
import { useRouter } from "next/router";
import axios from "axios";
import styles from '../styles/Support.module.css'
import Bike from '../components/Bike';
import Credits from '../components/Credits'
import AudioPlayer from '../components/AudioPlayer.js'

const Success = () => {
  const {
    query: { session_id },
  } = useRouter();
  const inputElement = useRef(null);
  const [displayName, setDisplayName] = useState("")
  const [successData, setSuccessData] = useState({})
  const [successAdded, setSuccessAdded] = useState(false)
  const [donors, setDonors] = useState("")
  
  // useEffect(() => {
  //   if (data) {
  //     shootFireworks();
  //     clearCart();
  //   }
  // }, [data]);
  console.log('SESSRION', session_id)
  
  useEffect(() => {
   (async ()=> {
    if (inputElement.current) {
      inputElement.current.focus();
    }

    try {
      const data = await axios.get(`/api/checkout_sessions/${session_id}`)
      const customer = data.data.customer_details
      const obj = {
        amount: data.data.amount_total,
        currency: data.data.currency,
        stripe_name: customer.name,
        email: customer.email,
        transactionId: data.data.id,
        address: customer.address
      }
      console.log('OBJECT', obj, donors)
      if (donors) {
        const thisDonor = donors.filter((i => i.email == obj.email))[0]
        console.log('THIS DONOR', thisDonor)
        obj.displayName = thisDonor.displayName
        setSuccessData(obj)
      }
    
    } catch(e) {
      console.log('ERROR', e.message)
    }    
   })()
  }, [session_id, donors]);

  useEffect(() => {
    getDonors()
  },[])
  
  const getDonors = async () => {
    const {data} = await axios.get(`/api/donor`)
    console.log('DONORS DARTA', data)
    setDonors(data)
  }

  const submit = async () => {
    const email = successData.email
    const data = {email, displayName}
  
    // if (session_id)
    if (successData) {
      try {
        const response = await axios.put('/api/donor', {data})
        if (response) {
          getDonors()
          setSuccessAdded(true)
        }
      }
      catch (e) {
        console.log('ERROR', e.message)
      }

    }
  }

  return (
    <div className={styles.successPage}>
      <h2>THANK YOU FOR YOUR DONATION! YOU HAVE WON THE GAME AND WILL RECEIVE TOTAL ENLIGHTENMENT UPON YOUR DEATH.</h2>
      {successData && !successData.displayName ? <div className={styles.patronName}>
        <label>How would you like to be listed in the credit scene?</label>
        <input ref={inputElement} type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} maxLength="16"/>
        <button onClick={submit} >SUBMIT</button>
      </div> : null }
      {successAdded && <div className={styles.successPerson}>
        <h2>{displayName}, you will be forever remembered within the infinite halls of PS37.</h2>
      </div> }
      {successData.displayName && donors &&
      <>
      <h2 className={styles.audioH2}>THANKS FOR YOUR SUPPORT  <span className={styles.audio}><AudioPlayer /></span></h2>
     
       <Credits donors={donors} /> 
      </> }
      <Bike />
    </div>
  );
}

export default Success;
