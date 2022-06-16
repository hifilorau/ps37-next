import { Subtitles } from '@material-ui/icons'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
const Upcoming = () => {
  return (
    <Link href="/events">
    <a>
    <div className={styles.upcomingWrapper}>
      <h1>Upcoming Events</h1>
      <ul className={styles.ucList}>
      <li className={styles.ucListItem}>
          <div className={styles.ucDate}>July 7th</div>  
          <div className={styles.ucName}>Mamis and the Papis</div>   
        </li> 
        <li className={styles.ucListItem}>
          <div className={styles.ucDate}>July 8th</div>  
          <div className={styles.ucName}>Shirlette Ammons and Spider Bags</div>   
        </li>  
        <li className={styles.ucListItem}>
          <div className={styles.ucDate}>July 9th</div>  
          <div className={styles.ucName}>Come Dance With Me</div>   
        </li>  
        <li className={styles.ucListItem}>
          <div className={styles.ucDate}>July 10th</div>  
          <div className={styles.ucName}>The Floor</div>   
        </li>  
      </ul> 
    </div>
    </a></Link>
  )

}

export default Upcoming