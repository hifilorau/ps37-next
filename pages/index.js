
import Image from 'next/image'
import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import  React, {useState} from 'react';
import Banner from '../components/Banner'
import Logo from "../public/images/logo-08.svg"
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Upcoming from '../components/Upcoming'
import {getResourceData} from '../lib/functions'
import Head from 'next/head'



const VidSketch = dynamic(
  () => import('../components/VidSketch'),
  { ssr: false }
)


const Home = ({events}) => {

  const [keyholeAnimation, setKeyholeAnimation] = useState(false)
  const router = useRouter();

  const rnGenerator = () => {
    const rarity = 10;
    let rng = Math.floor((Math.random() * rarity) + 1);
    this.setState({randomNumber: rng})
  }

  const keyholeStart = () => {
    setKeyholeAnimation(true)
    setTimeout(() => {
      router.push("/vaporplanes")
    }, 5500)
  }

  return (
  <>
    <Head>
    <title>PS37: Arthaus, Collective, and Venue</title>
   </Head>
  <div className="homepage-container">
  {!keyholeAnimation && <Header /> }
  <div className={styles.home}>
  {/* <div className={keyholeAnimation ? "keyhole-punch-2" : "kp2"}>
    <div className="logo-wrapper">
        <Image className="logo-landing glitch" src={Logo} objectFit="cover" layout="fill"/>
    </div>
  </div> */}
   {/* <Banner message={{
     link: 'https://www.carolinaabortionfund.org/donate',
     message: 'Support the North Carolina Abortion Fund: Click to donate directly.'
   }}/> */}
  {!keyholeAnimation && <div className={styles.banner} style={{
      width: '100%',
      height: 'auto',
      position: 'relative',
      zIndex: '1000',
      minHeight: '280px'
    }}>
    <Image src="/images/psbg.jpg" layout="fill" height={200} width={400} />
    </div>}
    <div className="taglineWrapper">
      <div className={!keyholeAnimation ? "tagline" : "tagline fadeout"}>
        <Upcoming events={events} />
        <div className="landing-content-container">
        <div className={!keyholeAnimation ? "logo-wrapper" : "logo-wrapper keyhole-punch"} onClick={keyholeStart}>
            <Image className="logo-landing glitch" src={Logo} objectFit="cover" layout="fill"/>
        </div>
      </div>
      </div> 
    </div>
    {keyholeAnimation && <div className="key-bg">
      <h1>YOU ARE NOW ENTERING THE MF KEYHOLE...</h1>
    </div>} 
      {/* <h1>(and also loading...)</h1>
    <VidSketch />
    {/* <div className="video-2">
      <video src="/images/vid.mp4" autoPlay muted loop/>
    </div> */}
    

    {/* <Footer /> */} 
  </div>
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

//