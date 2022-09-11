import styles from '../styles/Support.module.css'

const JOBTITLES = ["SAUCE BOSS", "INTERPLANETARY DIETY", "BASICALLY CAP'N KIRK", "NEBULAR NIHILIST", "SPACE QUEEN", "JUKE BOX HERO"]
const Credits = (donors) => {
  console.log('CREDITS PAGE', donors.donors)
  
  const getTitle = () => {
    const title = JOBTITLES[Math.floor(Math.random() * JOBTITLES.length)]
    return title
  }
  return (
    <div className={styles.credits}>
      <ul className={styles.donorList}>
        {donors.donors.map((donor) => {
          return (
          <li key={donor.email}>
            <div className={styles.job}>{getTitle()}</div>
            <div className={styles.donor}>{donor.displayName || "Anonymous"}</div>
          </li>)
        })}
         <li key={1}>
            <div className={styles.job}>DNGMNT}</div>
            <div className={styles.donor}>D. Straughn</div>
          </li>
          <li key={2}>
            <div className={styles.job}>JUKE BOX HERO</div>
            <div className={styles.donor}>M ComeauOeuO</div>
          </li>
          <li key={3}>
            <div className={styles.job}>Alien Outreach</div>
            <div className={styles.donor}>Schamder</div>
          </li>
      </ul>
    </div>
  )
}

export default Credits