
import React, {useEffect, useState} from 'react'
// import Poster from '../../public/images/ps37-moon-shot.png'
// import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import {Container, Button} from '@mui/material/';
import styles from '../../styles/Rent.module.css'
import Image from 'next/image'
import Head from 'next/head'

const Rent = () => {
  
  const [renting, setRenting ] = useState("event");
  //move to api folder at some point


  return (
    <>
    <Head>
    <title>Event Rental Space, Durham NC</title>
   </Head>
    <div className={styles.rentBack}>
  
      <div className={styles.rentPage}>
        <Container>
          <div className={styles.content}>
          <h1>Rental Packages</h1>
          <p className={styles.generalInfo}>We have a 4000sq warehouse and super awesome backyard and patio space available for both private events as well as for creatives who need something beyond an office on an ongoing basis. For events we'll make sure it's cleaned up real nice, and for creatives well make sure you can make as big of a mess as you need. Just everyone keep in mind, we are a super scrappy operation and this is an old school Durham warehouse. That said, more than happy to supply references, we haven't had a bad event yet or a renter that left us on bad terms since we first startd in 2018.So let us know if you like our wares and you need space.</p>
          <div className={styles.rentalOptions}>
            <div className={styles.rentalOption} onClick={() => setRenting("event")}>
              <h3>Event Rental</h3>
              <p>starting at $700</p>
            </div>
            <div className={styles.rentalOption} onClick={() => setRenting("creative")}>
             <h3>Creative/Makerspace</h3> 
             <p>starting at $200/month</p>
            </div>
            <div className={styles.rentalOption} onClick={() => setRenting("photo")}>
             <h3>Photography/Videography</h3> 
             <p>starting at $50/hr - $300/day</p>
            </div>
          </div>
          {renting == "" && <div>Click above for more details </div>}
       <div>
         <div className={styles.imageSituation}>
            <div className={styles.imageWrap}>
              <Image 
                src="/images/ps37-2.jpeg"
                placeholder="blur"
                blurDataURL="/images/ps37-2.jpeg"
                layout='responsive'
                width={350}
                height={237}
            />
            </div>
            <div className={styles.imageWrap}>
              <Image 
                src="/images/ps37-3.jpeg"
                placeholder="blur"
                blurDataURL="/images/ps37-2.jpeg"
                layout='responsive'
                width={350}
                height={237}
            />
            </div>
            <div className={styles.imageWrap}>
              <Image 
                src="/images/ps37-barlit.jpeg"
                placeholder="blur"
                blurDataURL="/images/ps37-2.jpeg"
                layout='responsive'
                width={350}
                height={237}
            />
            </div>
            <div className={styles.imageWrap}>
              <Image 
                src="/images/ps37-4.jpeg"
                placeholder="blur"
                blurDataURL="/images/ps37-2.jpeg"
                layout='responsive'
                width={350}
                height={237}
            />
            </div>
          </div>
        <div className={styles.packages}>
          {renting == "event" && <EventRent />}
          {renting == "creative" && <CreativeRent />}
          {renting == "photo" && <PhotographyRent />}
        </div>
          </div>
          </div>
        </Container>
       
      </div>pm 
    </div>
  </>
  )
}

export default Rent


const EventRent = () => {
  return (
    <div>
      <h2>Private Event Packages:</h2>
      <ul className={styles.eventPackages} >
        <li className={styles.eventPackage}>
          <h3>Small private/corporate event</h3>
          <h4>Cost: $700*</h4>
          <ul>
            <li>Time: 4 hours</li>
            <li>Available hours: 10am-9pm</li>
            <li>Heads: Up to 10 people</li>
            <li>Staff: 1 staff member</li>
            <li>Amenities: Beverages</li>
          </ul>
          <FormLink />
        </li>

        <li className={styles.eventPackage}>
          <h3>Mid sized private/corporate event</h3>
          <h4>Cost: $1299*</h4>
          <ul>
            <li>Time: 4 hours</li>
            <li>Available hours: 10am-9pm</li>
            <li>Heads: Up to 20 people</li>
            <li>Staff: 1 staff member</li>
            <li>Amenities: Beverages & Food</li>
            <li>Pizza for 20 from Hutchins Garage</li>
          </ul>
          <FormLink />
        </li>

        <li className={styles.eventPackage}>
          <h3>Swanky Private Event</h3>
          <h4>Cost: $1250 + $20/head*</h4>
          <h5>includes: $250 cleaning fee</h5>
          <ul>
            <li>Time: 4 hours</li>
            <li>Available hours: 10am-9pm</li>
            <li>Heads: Up to 30 people</li>
            <li>Staff: 2 staff members</li>
            <li>Extra costs: $20/head</li>
            <li>Some circle tables and white linens</li>
            <li>Late fee: After 9:30pm $400 late charge/hr.</li>
          </ul>
          <FormLink />
        </li>
      </ul>
      <h3>All packages include:</h3>
      <ul className={styles.allPackagesInclude}>
        <li>1 clean indoor bathroom</li>
        <li>1 clean outdoor patio w tables chair</li>
        <li>Use of our bar and bar seating (alchohol not included)</li>
        <li>1000sq/feet of indoor warehouse space (coming soon)</li>
      </ul>
    </div>
  )
}

const CreativeRent = () => {
  return (
    <div>
      <h2>Creative Packages:</h2>
  
      <ul className={styles.eventPackages} >
        <li className={styles.eventPackage}>
          <h3>Dedicated Creative Space</h3>
          <h4>Cost: $2 sq/foot $200/month minimum</h4>
          <ul>
            <li>Time: 24/7</li>
            {/* <li>Available hours: 10am-9pm</li> */}
            <li>Single Occupancy</li>
            <li>Your own working area in warehouse</li>
            <li>Storage</li>
          </ul>
          <FormLink />
        </li>
        </ul>
        <h3>All packages include:</h3>
      <ul className={styles.allPackagesInclude}>
        <li>1 clean indoor bathroom</li>
        <li>1 Utility Sink</li>
        <li>Use of outdoor patio</li>
        <li>24/7 access to your space</li>
        <li>1000sq/feet of indoor warehouse space (coming soon)</li>
      </ul>
     
    </div>
  )
}

const PhotographyRent = () => {
  return (
    <div>
      <h2>Photography/Videography Packages:</h2>
      <ul className={styles.eventPackages} >
        <li className={styles.eventPackage}>
          <h3>Photography/Video Shoots</h3>
          <h4>Cost: $50/hr $300 per 10hr day</h4>
          <ul>
            <li>Time: 9am-7pm</li>
            {/* <li>Available hours: 10am-9pm</li> */}
            <li>No more than 3 people in at a time w/o permission</li>
            <li>Bring Your Own Gear/Backdrop,etc</li>
          </ul>
          <FormLink />
        </li>
    </ul>
    <h3>All packages include:</h3>
      <ul className={styles.allPackagesInclude}>
        <li>1 clean indoor bathroom</li>
        <li>1 Utility Sink</li>
        <li>Use of outdoor patio</li>
        <li>9am - 7pm space access</li>
        <li>Use of warehouse</li>
      </ul>
    </div>
  )
}

const FormLink = () => {
  return <a className={styles.formButton} target="_blank" rel="noreferrer" href="https://airtable.com/shrvl117K7aLgofhO">Submit Interest Form</a>
}