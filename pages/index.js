import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import React from 'react'
// import Video from '../public/images/ps37-v2-comp-nl.mp4';
import Poster from '../public/images/ps37-moon-shot.png'
import Logo from "../public/images/logo-13.svg"
// import Logo from "../public/images/ps37-text-purp-09.png"
import Footer from '../components/Footer.jsx'
import Link from 'next/link'
// import Snow from '../components/Snow'
import Snow from '../components/Snow'
const VidSketch = dynamic(
  () => import('../components/VidSketch'),
  { ssr: false }
)



const Home = () => {
  const rnGenerator = () => {
    const rarity = 10;
    let rng = Math.floor((Math.random() * rarity) + 1);
    this.setState({randomNumber: rng})
  }

  

  return (
  <div className={styles.home}>
 
    <VidSketch />
    <div className="homepage-container">

      {/* <div className="video-wrapper">
        <div className="video-ol"></div>
        <video className="video" src="/images/ps37-v2-comp-nl.mp4" type="video/mp4" autoPlay loop muted poster={Poster}/>
      </div> */}
      <div className="landing-content-container">

        <div className="logo-wrapper">
        {/* <Link href="/vaporplanes">  */}
            <Image className="logo-landing glitch" src={Logo}/>
        {/* </Link> */}
          {/* { this.state.randomNumber == 3 ?  <div className="tagline">A Paradise in Space</div>  : null }  */}
          {/* { this.state.randomNumber !== 3 ? <div className="tagline">makerspace, office, and arthaüs</div> : null } */}
          <div className="tagline">
            <div>Venue, arthaüs, and creative space</div>
            <div className="tag2">600B Foster Street, Durham, NC</div>
          </div> 
        </div>
      </div>
    </div>
    <Footer />
  </div>
  )
}

export default Home
