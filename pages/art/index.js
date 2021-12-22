import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import Footer from '../../components/footer.jsx'
import {Container, Button} from '@mui/material/';
import styles from '../../styles/Art.module.css'
import spacetimeImg from '../../public/images/spacetime-min.jpg'
import Image from 'next/image'
import Overlay from './overlay'
import { style } from '@mui/system'


const Art = () => {


let snowflakes = []; // array to hold snowflake objects

function setup() {
  createCanvas(400, 600);
  fill(240);
  noStroke();
}

const  draw = () => {
  background('brown');
  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}


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
          <div>
            <Overlay />
            <div style={{width: '336px'}}>
            <Image  src={spacetimeImg}/>
            </div>
          </div>
    
          <div className={styles.contentContainer}>
            <div>
              <h2>Spacetime Paradigm</h2>
              <div>Coming Soon - Q1 2022</div>
              <p>Primates standing on the edge of the unknown. We evolve, we devolve, along the way we made some NFTs. Gabe Eng-Goetz's art is a force of nature, and we're releasing it along with some perks, including a free print of your unique piece.</p>
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
              <p style={{color: '#333'}}>Building new vapor plane universes with Javascript.</p>
              <Link href="/vaporplanes"><a className={styles.altLink}>Play Now</a></Link>
            </div>
            {/* <h4>Hifilorau</h4> */}
          </div>
          <div className={styles.videoWrapper}>
                <video src="/images/vapor_planes_preview.mp4" muted autoPlay loop/>
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