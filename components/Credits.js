import styles from '../styles/Support.module.css'



const JOBTITLES = ["SAUCE BOSS", "INTERPLANETARY DIETY", "BASICALLY CAP'N KIRK", "NEBULAR NIHILIST", "JUKE BOX HERO"]
const Credits = (donors) => {
  console.log('CREDITS PAGE', donors.donors)
  
  const getTitle = () => {
    const title = JOBTITLES[Math.floor(Math.random() * JOBTITLES.length)]
    return title
  }
  return (
    <div className={styles.credits}>
      <ul className={styles.donorList}>
      <li className={styles.divider}>The crew</li>
        {donors.donors.map((donor) => {
          return (
          <li key={donor.email}>
            {/* <div className={styles.job}>{getTitle()}</div> */}
            <div className={styles.donor}>{donor.displayName || "Anonymous"}</div>
          </li>)
        })}
        <li>
        <li className={styles.divider}>STAFF & CREATIVE TEAM</li>
        </li>
         <li key={1}>
            <div className={styles.job}>DNGMNT</div>
            <div className={styles.donor}>The Danager</div>
          </li>
          <li key={2}>
            <div className={styles.job}>Alchemist</div>
            <div className={styles.donor}>ComeauOeuO</div>
          </li>
          <li key={3}>
            <div className={styles.job}>Alien Outreach</div>
            <div className={styles.donor}>Schamdes</div>
          </li>
          <li key={4}>
            <div className={styles.job}>Digital Engineering</div>
            <div className={styles.donor}>Roe</div>
          </li>
          <li key={5}>
            <div className={styles.job}>Deep Space Logistics</div>
            <div className={styles.donor}>McGruff</div>
          </li>
          <li key={6}>
            <div className={styles.job}>Pure Heart Stone & Construction</div>
            <div className={styles.donor}>Stone</div>
          </li>
          <li key={7}>
            <div className={styles.job}>SPRAY GOD</div>
            <div className={styles.donor}>G.GETS</div>
          </li>
          <li key={8}>
            <div className={styles.job}>SPACECENTNER INSTALLS</div>
            <div className={styles.donor}>A ME</div>
          </li>
          <li key={9}>
            <div className={styles.job}>Sincere thanks to everyone who helps keep us in the air.</div>
          </li>
      </ul>
    </div>
  )
}

export default Credits