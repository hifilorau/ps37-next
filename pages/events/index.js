
import React, {useEffect, useState} from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from 'next/image'
import Link from 'next/link'
import {getEventsData} from '../../lib/functions'
import Head from 'next/head'

const EventCard = ({psEvent}) => {
  const {name, ticket_link, date} = psEvent.fields
  const imgUrl = psEvent.fields.image[0].url
 

  return (
    <div className="event-card">
     
          <Zoom>
          <div className="event-image">
            <Image src={imgUrl} layout="fill"/>
          </div>
          </Zoom>
        <Link href={`/events/${psEvent.id}`}>
        <a>
        <div>{name}</div>
        </a>
      </Link>
        <div>{date}</div>
        <div><a className="event-link" target="_blank" rel="noreferrer" href={ticket_link}>Buy Tix</a></div>

    </div>
  )
}

const Events = ({events}) => {
  
  const psEvents = events;
  //move to api folder at some point


// const getData = async () => {
//   const response = await fetch('/api/eventsApi')
//   const data = await response.json()
//   console.log('COMPONENT RES', data)
//   setPsEvents(data)
// }
  
//   useEffect(() => {
//      getData();
//  }, []);

  if (psEvents.length <= 0) {
    return (
      <>
      <Head>
      <title>PS37 Event Information and Ticket Sales</title>
      </Head>
       <div className="event-page">
       <h1>Upcoming Events</h1>
       <div className="events-wrap">
       <p style={{textAlign: 'center', color: 'white', width: "100%"}}>No Tickets Currently On Sale</p>
       </div>
       </div>
      </>
    )
  }
  return (
    <>
   <Head>
    <title>PS37 Event Information and Ticket Sales</title>
   </Head>
    <div className="event-page">
      {/* <Joystick /> */}
      {/* <div className="video-wrapper">
        <div className="video-ol"></div>
          <video className="video" src="/images/ps37-v2-comp-nl.mp4" autoPlay loop muted poster={Poster}/>
      </div> */}
    <h1>Upcoming Events</h1>
      <div className="events-wrap">
          {psEvents && psEvents.map(psEvent => {
            console.log(psEvent)
            if (psEvent.fields.show) {
            return (<EventCard key={psEvent.id} psEvent={psEvent}/>)
            }
          })}
      </div>
    </div>
    </>
  )
}

export default Events;

export async function getServerSideProps(context) {
  const data = await getEventsData();
  const events = JSON.parse(JSON.stringify(data))
  
    return {
      props: {
        events
    }
  }
}