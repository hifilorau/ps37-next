import React, {useEffect, useState} from 'react'
import collage from '../../public/images/collage.png'
import collagePH from '../../public/images/planet-palms.png'
import {ImageLoad2} from '../../components/ImageLoad'
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

      {/* <div className="r/t-section">
        <div className="a-section-info content-container ">
          <h2>Vapor Planes</h2>
          <p>
            Take a deep breath, chill out, and imagine living on another plane. Vapor Planes is an ongoing PS37 virtual exhibit exploring chance, universe creation, and digital art as both value, and a means of utility. Does that make it stonks? I fucking hope not. 
          </p>
          <p>3737 of them will ultimately live on the blockchain, providing additional access to the space, discounted tickets, space rental, and some other cool shit that we haven't thought of  yet obviously. So if you are into supporting the space, owning an official piece of PS37 metamerch, or just huge nerdery, put on your damn MetaMask and hand over some of that crypto.</p>
          <Link href="/vaporplanes">Go to VaporPlanes</Link>
        </div>
        <div className="content-container art-content-image">
        <ImageLoad2 
          src={collage}
          placeholder={""}
          alt="Vapor Planes Collage"
          />
          </div>
      </div> */}
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