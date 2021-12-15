import React, {useEffect, useState} from 'react'
import collage from '../../images/collage.png'
import collagePH from '../../images/planet-palms.png'
import {ImageLoad2} from '../../components/ImageLoad'
import {Link} from 'react-router-dom'
import Footer from '../../components/footer.jsx'
import './art.css'


const Art = () => {
  return (
    <div className="art-page">
      <h1>Art Exhibits</h1>
      <div className="art-section">
        <div className="a-section-info content-container ">
          <h2>Vapor Planes</h2>
          <p>
            Take a deep breath, chill out, and imagine living on another plane. Vapor Planes is an ongoing PS37 virtual exhibit exploring chance, universe creation, and digital art as both value, and a means of utility. Does that make it stonks? I fucking hope not. 
          </p>
          <p>3737 of them will ultimately live on the blockchain, providing additional access to the space, discounted tickets, space rental, and some other cool shit that we haven't thought of  yet obviously. So if you are into supporting the space, owning an official piece of PS37 metamerch, or just huge nerdery, put on your damn MetaMask and hand over some of that crypto.</p>
          <Link to="/vaporplanes">Go to VaporPlanes</Link>
        </div>
        {/* <img src={collage} /> */}
        <div className="content-container art-content-image">
        <ImageLoad2 
          src={collage}
          placeholder={""}
          alt="Vapor Planes Collage"
          />
          </div>
      </div>
      <div className="art-section">
      <div className="a-section-info content-container ">
        <h2>Ideas</h2>
        <p>Interested in the intersection of digital art, LED lights, and digital farming? Have other weird installation ideas? Need a space to make something bonkers? Hit us up <a  href="mailto:ps37durham@gmail.com">at ps37durham@gmail.com</a></p>
      </div>
      </div>
      <Footer fixed={true}/>
    </div>
  ) 
}

export default Art