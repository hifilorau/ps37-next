
import React, {useEffect, useState} from 'react'
import Poster from '../../public/images/ps37-moon-shot.png'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Footer from '../../components/footer.jsx'
import Image from 'next/image'


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
      <div>{name}</div>
      <div>{date}</div>
      <div><a className="event-link" target="_blank" href={ticket_link}>Buy Tix</a></div>

    </div>
  )
}

const Events = () => {
  
  const [psEvents, setPsEvents ] = useState([]);
  //move to api folder at some point


const getData = async () => {
  const response = await fetch('/api/eventsApi')
  const data = await response.json()
  console.log('COMPONENT RES', data)
  setPsEvents(data)
}
  
  useEffect(() => {
     getData();
 }, []);

  return (
    <div>
    <div className="event-page">
      <div className="video-wrapper">
      <div className="video-ol"></div>
        <video className="video" src="/images/ps37-v2-comp-nl.mp4" autoPlay loop muted poster={Poster}/>
    </div>
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
    <Footer />
    </div>
  )
}

export default Events;