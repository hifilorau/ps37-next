import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Footer from '../../components/footer.jsx'
import {Container, Button} from '@mui/material/';
import styles from '../../styles/Art.module.css'
import spacetimeImg from '../../public/images/spacetime.jpg'
import Image from 'next/image'
import Overlay from './overlay'
import { style } from '@mui/system'


const Art = () => {

  useEffect(() => {
    // fetch("/api/pega").then((res) => {
    //   console.log('RES', res)
    //   return res.json()
    // }).then((data) => {
    //   console.log('DATA', data)
    // //  setOwners(data.owners)
    // //  setNFTs(data.NFTs)
    // })
  })


  return (
    <div className={styles.artPage}>
      <Container className={styles.artContainer}>
      <h1>PS37's Current & Upcoming Exhibitions and Installations</h1>
      <div className={styles.title}>
      {/* <h4>P</h4>
      <h4>S</h4>
      <h4>3 </h4>
      <h4>7 </h4> */}
      <br />
      <h4>M</h4>
      <h4>E</h4>
      <h4>T</h4>
      <h4>A</h4>
      <br/>
      <h4>&</h4>
      <br />
      <h4>M</h4>
      <h4>E</h4>
      <h4>A</h4>
      <h4>T</h4>
      </div>


      <div className={styles.exhibitList}>


        <div className={styles.artSection}>
          {/* <div className={styles.overlay}></div> */}
          <Overlay />
          <Image src={spacetimeImg} />
    
          <div className={styles.contentContainer}>
            <div>
              <h2>Spacetime Paradigm</h2>
              <p>Primates standing on the edge of the unknown. We evolve, we devolve, along the way we made some NFTs. Gabe's art is a force of nature, we're hoping this is just the beginning.</p>
              <Link href="/spacetime">Visit Spacetime Paradigm</Link>
            </div>
            <h4>GabeGets</h4>
          </div>
        </div>

        <div className={styles.artSection}>
          {/* <div className={styles.overlay}></div> */}
          {/* <Overlay /> */}
       
    
          <div className={styles.VPContentContainer}>
            <div>
              <h2 style={{color: 'purple'}}>Vapor Planes</h2>
              <p>Building new vapor plane universes with Javascript.</p>
            </div>
            {/* <h4>Hifilorau</h4> */}
          </div>
          <div className={styles.videoWrapper}>
                <video src="/images/vapor_planes_preview.mp4" mute autoPlay loop/>
              </div>
              <Link style={{color: 'purple'}} href="/vaporplanes">Create Now</Link>
        </div>
      </div>
      {/* <div className="art-section">
        <div className="a-section-info content-container ">
          <h2>Ideas</h2>
          <p>Interested in the intersection of digital art, LED lights, and digital farming? Have other weird installation ideas? Need a space to make something bonkers? Hit us up <a  href="mailto:ps37durham@gmail.com">at ps37durham@gmail.com</a></p>
        </div>
      </div> */}
      </Container>
      <Footer fixed={true}/>
    </div>
  ) 
}

export default Art