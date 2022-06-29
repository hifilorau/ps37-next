import styles from '../../styles/Event.module.css'
import {getEventData} from '../../lib/functions'
import Image from 'next/image'
import Head from 'next/head'

const EventPage = ({event}) => {
  const thisEvent = event.fields
  const eventImage = event.fields.image ? event.fields.image[0].url : "/images/ps37_flyer.jpg"
  return (
    <>
    <Head>
    <title>PS37 Event Page</title>
   </Head>
    <div className={styles.eventPage}>
      <div className={styles.contentWrapper}>
      <div className={styles.flyerWrapper}>
        {eventImage && <Image src={eventImage} layout="fill" objectFit="contain"/>}
      </div>
      <div className={styles.content}>
      <h1 className={styles.eventTitle}>{thisEvent.name}</h1>
        <div className={styles.contentItem}>
          <div className={styles.label}>Date:</div>
          <div className={styles.value}>{thisEvent.dateReadable}</div>
        </div>
      <p className={styles.description}>{thisEvent.description}</p>
      {thisEvent.ticket_link ? <a className={styles.ticketLink} href={thisEvent.ticket_link}>Get Tickets</a> : <div className={styles.soon}>Tickets on sale soon</div>}
      </div>
      </div>
    </div>
    </>
  )
}

export default EventPage

export async function getServerSideProps(context) {
  const id = context.query.date
  const data = await getEventData(id);
  const event = JSON.parse(JSON.stringify(data))

    return {
      props: {
        event: event
    }
  }
}