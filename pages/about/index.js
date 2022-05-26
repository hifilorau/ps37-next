import Link from 'next/link'

const About = () => {
  return (
    <div>
    <div className="about">
      <h2>Your local neighborhood DIY venue.</h2>
      <div>
        <p> Founded in 2018 and located in the heart of downtown Durham in the DIY District, PS37 is a cooperative warehouse run by and for local artists. For booking or to rent space checkout <Link href="/rent">our rental page</Link> or contact ps37durham@gmail.com or drop us a dm on twitter or the insta @ps37durham</p>
        <p> Little known fact: The PS in PS37 actually stands for Paradise Spacecraft, an homage to the original Makerspace in Durham's DIY district, The Mothership, which was run by three of the most bad-ass women in the Universe. we'd say R.I.P. but the Mothership never dies.</p>
      </div>
    </div>
    {/* <Footer /> */}
    </div>
    )
}

export default About