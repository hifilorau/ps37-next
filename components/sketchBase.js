import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import {Container, Button, LinearProgress} from '@mui/material/';
// import Sketch from 'react-p5'
import { useMoralis, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})




const Sketch1 = () => {


///STATE ITEMS 
const { authenticate, isAuthenticated, user, logout, isAuthenticating } = useMoralis();
const [nftAttributes, setNftAttributes] = useState({})
const [fileUrl, updateFileUrl] = useState(``)
const [customSave, setCustomSave] = useState(null)
const [info, setInfo] = useState(false)
const [status, setStatus] = useState("");
const [name, setName] = useState("");
const [description, setDescription] = useState("");
const [url, setURL] = useState("");
const [metaInfo, setMetaInfo] = useState(true)
const [isLoading, setIsLoading] = useState(true)

///INITIALIZE VARIABLES



const renderConnect = () => {
	if (isAuthenticated) {
		return <Button onClick={logout}>Logout</Button>
	}
	if (isAuthenticating) {
		return <Button ><LinearProgress /></Button>
	} 
	else return <Button onClick={authenticate}>Connect </Button>
}

const override = `
display: block;
margin: 0 auto;
border-color: red;
`;

useEffect( async () => {
	console.log('WINDOW', window)
		// const {address, status} = await getCurrentWalletConnected();
    // setWallet(address)
    // setStatus(status); 
		// addWalletListener();
}, [])


  const preload = (p5) => {


  }

  const setup = (p5, canvasParentRef) => {
		p5.loadImage(logo1, (img) => {
			testImage=img;
		});
		height=p5.windowWidth
		width=p5.windowHeight
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef)
    p5.angleMode(p5.DEGREES)
	  p5.imageMode(p5.CENTER);
    p5.rectMode(p5.CENTER)
   

  }

	const draw = (p5, testImage) => {
	
    p5.push()

	  p5.pop()


		
	}

	const  customDraw = (p5, img) => {
 
		console.log('NEW IMAGE STUFF', img1)
		// p5.push()
		// p5.translate(0,0,-10)



		p5.push()

	  p5.pop()
	}
  

  

const realityCheck = (percent, p5) => {
	const check = p5.random(0,100);
  if (percent > check) {
    return true
  } else return false
}


class Sun {
	constructor (sunColor, p5) {
		this.circum = p5.random(145, 450)
		this.vert =  p5.random(-height/2, 150)
		this.sunSpot = Math.floor( p5.random(2,4))
		this.horiz = this.sunSpot < 3 ? p5.random(-width/2,-400) :  p5.random(width/2, 400)
		console.log("SUN height, w", this.vert, this.horiz)
		// this.horiz = random(-600,600)
		this.color = p5.color(sunColor);
		// this.color.setAlpha(128 + 128 * sin(millis() / 1000)); 
	}
  display(p5){
    p5.noStroke()
    p5.fill(sunColor);
    p5.circle(this.horiz, this.vert, this.circum);
	}
}




function keyPressed(p5) {
  if (p5.keyCode === p5.UP_ARROW) {
    p5.save()
  } else {
   return
  }
}

const  resetFrame = (p5) => {
	window.location.reload(false);
}



  return (
    <div id='canvas-parent' className="future vaporplanes">
     <div className="sketch-wrapper">
			<Sketch setup={(...args) => setup(...args)}  preload={(...args) => preload(...args)} keyPressed={(...args) => keyPressed(...args)} draw={(p5, img) => draw(p5, img)}/>
		 </div>	
    </div>
  )
}

export default Sketch1;