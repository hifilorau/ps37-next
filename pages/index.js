import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import  React, {useState} from 'react';
// import Video from '../public/images/ps37-v2-comp-nl.mp4';
import Poster from '../public/images/ps37-moon-shot.png'
import Logo from "../public/images/logo-08.svg"
import { useRouter } from 'next/router'
// import Logo from "../public/images/key_door.png"

// import Logo from "../public/images/ps37-text-purp-09.png"
import Header from '../components/Header'
import Upcoming from '../components/Upcoming'
import {getResourceData} from '../lib/functions'
import { autocompleteClasses } from '@mui/material'


const VidSketch = dynamic(
  () => import('../components/VidSketch'),
  { ssr: false }
)


const Home = ({events}) => {

  const [keyholeAnimation, setKeyholeAnimation] = useState(false)
  const router = useRouter();

  console.log('DATA F', events)
  const rnGenerator = () => {
    const rarity = 10;
    let rng = Math.floor((Math.random() * rarity) + 1);
    this.setState({randomNumber: rng})
  }

  const keyholeStart = () => {
    setKeyholeAnimation(true)
    setTimeout(() => {
      router.push("/vaporplanes")
    }, 5000)
  }

  return (
  <>
  {!keyholeAnimation && <Header /> }
  <div className={styles.home}>
  {!keyholeAnimation && <div className={styles.banner} style={{
      width: '100%',
      height: 'auto',
      position: 'relative',
      zIndex: '1000',
      minHeight: '280px'
    }}>
    <Image src="/images/psbg.jpg" layout="fill" height={200} width={400} />
    </div>}
    <div className={!keyholeAnimation ? "tagline" : "tagline fadeout"}>
      <Upcoming events={events} />
    </div> 
    {keyholeAnimation && <div className="key-bg">
      <h1>YOU ARE NOW ENTERING THE MF KEYHOLE.</h1>
    </div>}
    <VidSketch />
    <div className="homepage-container">
      <div className="landing-content-container">
        <div className={!keyholeAnimation ? "logo-wrapper" : "logo-wrapper keyhole-punch"} onClick={keyholeStart}>
        {/* <Link href="/vaporplanes">  */}
            <Image className="logo-landing glitch" src={Logo} objectFit="cover" layout="fill"/>
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
  </>
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