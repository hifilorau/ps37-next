import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import React from 'react'
// import Video from '../public/images/ps37-v2-comp-nl.mp4';
import Poster from '../public/images/ps37-moon-shot.png'
import Logo from "../public/images/logo-08.svg"
// import Logo from "../public/images/ps37-text-purp-09.png"
import Footer from '../components/Footer.jsx'
import Link from 'next/link'
// import Snow from '../components/Snow'
import Snow from '../components/Snow'
import Upcoming from '../components/Upcoming'
import {getResourceData, minifyData} from '../lib/functions'

const VidSketch = dynamic(
  () => import('../components/VidSketch'),
  { ssr: false }
)



const Home = ({events}) => {
  console.log('DATA F', events)
  const rnGenerator = () => {
    const rarity = 10;
    let rng = Math.floor((Math.random() * rarity) + 1);
    this.setState({randomNumber: rng})
  }

  

  return (
  <div className={styles.home}>
    <div className="tagline">
      <Upcoming events={events} />
            {/* <div>Venue, arthaüs, and creative space</div>
            <div className="tag2">600B Foster Street, Durham, NC</div> */}
          </div> 
    <VidSketch />
    <div className="homepage-container">
      <div className="landing-content-container">

        <div className="logo-wrapper">
        {/* <Link href="/vaporplanes">  */}
            <Image className="logo-landing glitch" src={Logo}/>
        {/* </Link> */}
          {/* { this.state.randomNumber == 3 ?  <div className="tagline">A Paradise in Space</div>  : null }  */}
          {/* { this.state.randomNumber !== 3 ? <div className="tagline">makerspace, office, and arthaüs</div> : null } */}
        </div>
        {/* <div className="tagline">
            <Upcoming />
          </div>  */}
      </div>
    </div>
    {/* <Footer /> */}
  </div>
  )
}

export default Home

export async function getServerSideProps(context) {
  const data = await getResourceData();
    return {
      props: {
        events: data
    }
  }
}