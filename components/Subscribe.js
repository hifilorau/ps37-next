import React, {useState} from 'react'
import axios from 'axios'
import styles from '../styles/Blog.module.css'


function Subscribe() {

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [state, setState] = useState('idle')
  const [errorMsg, setErrorMsg] = useState(null)

  const subscribe = async (e) => {
    e.preventDefault()
    setState('Loading')

    try {
      const response = await axios.post('/api/subscribe', { email, name })
      console.log(response)
      setState('Success')
      setEmail('')
      setName('')
    } catch (e) {
      console.log(e.response.data.error)
      setErrorMsg(e.response.data.error)
      setState('Error')
    }
  }

  return (
    <div className={styles.subscribeContainer}>
      <h4 className={styles.subHeader}>Subscribe to the Paradise Rewind</h4>
      <p className="sub-text">
        We'll send you a monthly email highlighting what's happening at PS37 in the upcoming month, along with some highlights from last month. No SPAM ever... unless it's food!
      </p>
      <form onSubmit={subscribe}>
        <div className={styles.subFormContainer}>
          <div className={styles.inputForm}>
            <input
              required
              id="email-input"
              name="email"
              type="email"
              placeholder="What's your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              id="name-input"
              name="name"
              type="name"
              placeholder="Preferred Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className={styles.subButton}>
              <button
                disabled={state === 'Loading'}
                type="submit"
                className="form-btn"
                onClick={subscribe}
              >
                Subscribe
              </button>
          </div>
          </div>
     
        </div>
        {state === 'Error' && (
          <p className={styles.errorState}>{errorMsg}</p>
        )}
        {state === 'Success' && (
          <p className={styles.successState}>Awesome, you've been subscribed!</p>
        )}
      </form>
    </div>
  )
}

export default Subscribe