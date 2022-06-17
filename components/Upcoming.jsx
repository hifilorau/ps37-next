import { Subtitles } from '@material-ui/icons'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Upcoming = ({events}) => {
  return (
    // <Link href="/events">
    // <a>
    <div className={styles.upcomingWrapper}>
      <h1>Upcoming Events</h1>
      <ul className={styles.ucList}>
      {/* <li className={styles.ucListItem}>
          <div className={styles.ucName}>Mamis and the Papis</div>   
          <div className={styles.ucDate}>July 7th</div>  
        </li> 
        <li className={styles.ucListItem}>
          <div className={styles.ucName}>Shirlette Ammons and Spider Bags</div>   
          <div className={styles.ucDate}>July 8th</div>  
        </li>  
        <li className={styles.ucListItem}>
          <div className={styles.ucName}>Come Dance With Me</div>   
          <div className={styles.ucDate}>July 9th</div>  
        </li>  
        <li className={styles.ucListItem}>
          <div className={styles.ucName}>The Floor</div>   
          <div className={styles.ucDate}>July 10th</div>  
        </li>   */}
        {events.map((event) => 
          <li className={styles.ucListItem} key={event.id}>
             <Link href= {`/events/${event.id}`} >
               <a className={styles.ucName}> 
                <div>{event.fields.name}</div>  
               </a>
             </Link> 
             <div className={styles.ucDate}>{event.fields.dateReadable}</div>  
           </li> 
        )}
      </ul> 
    </div>
    // </a></Link>
  )

}

export default Upcoming