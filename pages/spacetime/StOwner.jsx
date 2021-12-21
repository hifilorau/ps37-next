import React, {useState, useEffect} from 'react'
import styles from '../../styles/Spacetime.module.css'
import Link from 'next/link'

const StOwner = ({ownerNFT}) => {
  console.log('OWNEDmna', ownerNFT)
  const [tickets, setTicket] = useState(0)
  
  return (
    <div className={styles.stats}>
      <div className={styles.group}>
        <div className={styles.label}>Golden Tickets:</div>
        <div className={styles.value}>{ownerNFT.tickets}</div>
      </div>

      <div className={styles.group}>
        <div className={styles.label}>Primal Devolution Claim:</div>
        <div className={styles.value}>{!ownerNFT.status ? "false" : "true" }</div>
      </div>

      <div className={styles.group}>
        <div className={styles.label}>Name:</div>
        <div className={styles.value}>{`Spacetime Paradigm #${ownerNFT.serial}`}</div>
      </div>

      <div className={styles.group}>
        <div className={styles.label}>Serial Number:</div>
        <div className={styles.value}>{`#000000${ownerNFT.serial}`}</div>
      </div>

      <Link href="/spacetime/fullscreen">View Fullscreen</Link>
    </div>
  )
}

export default StOwner

