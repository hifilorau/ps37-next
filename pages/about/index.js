import Link from 'next/link'
import Head from 'next/head'
const About = () => {
  return (
    <>
   <Head>
    <title>Mission and Information</title>
   </Head>
    <div className="about">
      <h2>PS37: Arthaus & Venue.</h2>
      <div className="tag2">600B Foster Street, Durham, NC</div>
      {/* <div>Venue, arthaüs, and creative space</div> */}
      <div>
        <p> Founded in 2018, PS37 is a community minded arthaus and venue located in the heart of downtown Durham in the DIY District.</p>
        
        <h3>Coming to a show?</h3>
        <p>
        We are a partially covered outdoor venue with a full bar which operates legally by having all of our events donate a percentage of alchohol proceeds to local non-profits. Our programming is held under a covered platform and event-goers congregate in our large graveled yard. The bar is next to the covered platform and offers a wide range of drinks. Our restrooms are porta-potties located toward the back of our lot. The main entrance faces Foster Street across a short parking lot to the side of the building (adjacent to Altered Image Hair Salon). 
        </p>
           
         <p>To rent space checkout <Link href="/rent">our rental page</Link>, contact ps37durham@gmail.com, or drop us a dm on twitter or the insta @ps37durham</p>
      </div>
      
      
      <h3>Our Mission</h3>
      <div>
        <p>Our goal at PS37 is to always provide a safe space for people to gather and experience art, music, and wonder. We aim to keep the spirit of Durham alive and well as a massive influx of out of town money and new development transform the city of Durham. As long time citizens of Durham we feel that citizens have had very little voice in all of this new development and hope that through PS37 we can both keep the spirt of old Durham alive while also providing the members of our community agency in the development and evolution of at least one small part of a city we all love so much.</p>
      </div>
      <p className="fun-fact"> Little known fact: The PS in PS37 actually stands for Paradise Spacecraft, an homage to both The Mothership, an all female owned office and event space that was operated in Durham through 2020 and the Paradise Lounge, which was a Go Go & dance club that was operated out of the front of the space in the 1970s where Ellen Cassilly Architecture offices currently reside.</p>
    </div>

  
    {/* <Footer /> */}

    </>
    )
}

export default About