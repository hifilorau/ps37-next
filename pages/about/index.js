import Link from 'next/link'
import Head from 'next/head'
const About = () => {
  return (
    <>
   <Head>
    <title>Mission and Information</title>
   </Head>
    <div className="about">
      <h2>Your local neighborhood arthaus & venue.</h2>
      <div className="tag2">600B Foster Street, Durham, NC</div>
      {/* <div>Venue, arthaüs, and creative space</div> */}
      <div>
        <p> Founded in 2018, PS37 is a community minded art collective and venue located in the heart of downtown Durham in the DIY District. For booking or to rent space checkout <Link href="/rent">our rental page</Link>, contact ps37durham@gmail.com, or drop us a dm on twitter or the insta @ps37durham</p>
        <p> Little known fact: The PS in PS37 actually stands for Paradise Spacecraft, an homage to the original Makerspace in Durham's DIY district, The Mothership, which was run by three of the most bad-ass women in the Universe. we'd say R.I.P. but the Mothership never dies.</p>
      </div>
      <h3>Our Mission</h3>
      <div>
        <p>Provide a safe space for people in the community to gather and experience art, music, and wonder. </p>
        <p>Keep the spirit of Durham alive in the midst of a massive influx of development and out of town money. </p>
        <p>Provide community members agency in the development and evolution of Durham.</p>
      </div>
    </div>
    {/* <Footer /> */}

    </>
    )
}

export default About