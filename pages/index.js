
import Image from 'next/image'
// import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import  React, {useState, useEffect} from 'react';
import Cube from '../components/Cube'
// import Logo from "../public/images/logo-08.svg"

import { GridLoader } from 'react-spinners';
import { useRouter } from 'next/router'
import Header from '../components/Header'
import Upcoming from '../components/Upcoming'
// import {getResourceData} from '../lib/functions'
import Head from 'next/head'
import Link from 'next/link'



// const VidSketch = dynamic(
//   () => import('../components/VidSketch'),
//   { ssr: false }
// )
const override = `
display: block;
margin: 0 auto;
border-color: red;
`;

const Home = () => {

  const [keyholeAnimation, setKeyholeAnimation] = useState(false)
  const router = useRouter();
  const [events, setEvents] = useState([])
  // const rnGenerator = () => {
  //   const rarity = 10;
  //   let rng = Math.floor((Math.random() * rarity) + 1);
  //   this.setState({randomNumber: rng})
  // }

  const getData = async () => {
  const response = await fetch('/api/eventsApi')
  const data = await response.json()
  console.log('COMPONENT RES', data)
  setEvents(data)
}
  
  useEffect(() => {
     getData();
 }, []);


  const keyholeStart = () => {
    setKeyholeAnimation(true)
    setTimeout(() => {
      router.push("/vaporplanes")
    }, 5500)
  }

  return (
  <>
    <Head>
    <title>PS37: Arthaus & Venue</title>
   </Head>
  <div className="homepage-container">
      <div className="video-2">
        <video src="https://hifilorau.s3.us-west-2.amazonaws.com/vid.mp4" autoPlay muted loop/>
      </div>
     {!keyholeAnimation && <Header /> }

     {!keyholeAnimation && <div className={styles.banner} style={{
          width: '100%',
          height: 'auto',
          position: 'relative',
          zIndex: '1000',
          minHeight: '280px'
        }}>
        <Image src="/images/psbg.jpg" layout="fill" height={200} width={400} />
        </div>}
    
    <div className={styles.home}>
      
      {/* <div className="taglineWrapper">
        <div className="tagline">
          <div className={styles.upcomingWrapper}>
            <h1 className="text-glow">Save Our Ship</h1>
            <div>
            <p className={styles.donationP}>Click <Link href="/support"><a>here</a></Link>, or below, to learn more about how you can help sustain PS37.</p>
              <Link href="/support">
                <a>
                  <Cube />
                </a>

              </Link>
            </div>
          </div>
        </div> 
      </div> */}

      {/* <Banner message={{
        link: 'https://www.carolinaabortionfund.org/donate',
        message: 'Support the North Carolina Abortion Fund: Click to donate directly.'
      }}/> */}
        <div className="taglineWrapper">
          <div className={!keyholeAnimation ? "tagline" : "tagline fadeout"}>
          {events.length > 0 ? <Upcoming events={events}/> : 
          <div style={{
            marginTop: '20px'
          }}>
            <GridLoader color={'white'} isLoading={true} 
                css={override} size={30} />
          </div>	
              } 
            <div className="landing-content-container">
            <div className={!keyholeAnimation ? "logo-wrapper" : "logo-wrapper keyhole-punch"} onClick={keyholeStart}>
                <Image className="logo-landing glitch" src="/images/logo-08.svg" objectFit="cover" layout="fill" priority/>
            </div>
          </div>
          </div> 
        </div>
        {keyholeAnimation && <div className="key-bg">
          <h1>YOU ARE NOW ENTERING THE MF KEYHOLE...</h1>
        </div>} 
        {/* <h1>(and also loading...)</h1> */}
        {/* <VidSketch /> */}
    
          {/* <VidSketch /> */}

        {/* <Footer /> */} 
    </div>
  </div>
  </>
  )
}

export default Home

// export async function getServerSideProps(context) {
//   const data = await getResourceData();
//     return {
//       props: {
//         events: data
//     }
//   }
// }

//