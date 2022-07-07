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
        We are a partially covered outdoor venue with a full bar which operates legally by making all of our events donate a percentage of our alchohol proceeds to local non-profits. Our programming is held on our covered platform and event-goers congregate in our large graveled area. The bar is next to the covered platform and offers a wide range of beer and liquor drinks in addition to NA options. Our restrooms are porta-potties located toward the back of our lot. The main entrance faces Foster Street across a short parking lot to the side of the building (adjacent to Altered Image Hair Salon). 
        </p>
          
          
         <p>For booking or to rent space checkout <Link href="/rent">our rental page</Link>, contact ps37durham@gmail.com, or drop us a dm on twitter or the insta @ps37durham</p>
      </div>
      
      
      <h3>Our Mission</h3>
      <div>
        <p>PS37 is all about providing a safe space for people in the community to gather and experience art, music, and wonder. Our goal is to keep the spirit of Durham alive and well during a massive influx of out of town money and new development. As long time citizens of Durham we feel that we have had very little voice in that development and hope that through PS37 we can provide members of our community agency in the development and evolution of at least one small part of a city we all love so much.</p>
      </div>
      <p className="fun-fact"> Little known fact: The PS in PS37 actually stands for Paradise Spacecraft, an homage to The Mothership, an all female owned office and event space that was operated in Durham through 2020.</p>
    </div>

  
    {/* <Footer /> */}

    </>
    )
}

export default About