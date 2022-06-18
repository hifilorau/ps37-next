import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import {Container, Button, LinearProgress} from '@mui/material/';
// import Sketch from 'react-p5'
import { useMoralis, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})
const logo1 = '/images/palms_main.svg'
const logo5 =  '/images/logo-12.svg'
import Link from 'next/link'
const logo =  '/images/ps37-text-purp-09.png'
const igLogo = '/images/ig_logo.png'

// import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
// import { create } from 'ipfs-http-client'
// import '../Future/future.css'
import GridLoader from 'react-spinners/GridLoader'
// import { Web3ReactProvider, useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
// import { create } from 'ipfs-http-client'

// import { connectWallet, getCurrentWalletConnected, mintNFT } from "../../utils/interact.js"
import MetaInfo from '../pages/vaporplanes/Meta.js'

// const client = create('https://ipfs.infura.io:5001/api/v0')
// const contractAddress = "0x90fa9714C8e7961F8D703A0a7085D5F29F269c23"




const P5Vapor = () => {
// const context = useWeb3React()
// const { connector, library, chainId, account, activate, deactivate, active, error } = context
// //  const [gridLake, setGridLake] = useState(false)



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
var hLine;
let attributes = {}
let sun;
let isSun;
let skyColor;
let sunColor;
let lineColor;
let mtnColors = [];
let moonColors = [];
let gridLake;
let starColor;
let mtns = [];
let moons = [];
let img;
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let testImage;
let images = [];
let thisLogo;
let thisImg;




let width;
// let width = 3840;
// let width = 2160;
let height;
// let height = 2160;
//need polar and black scheme
let THEME_ARRAY = [
	///Lavendar Plane
	["#BEFCFF", "#DEFFFA", "#FFDAF5", "#B0E1FF","#E6C6FF" ], /// Roz Vonos (pink mountain)
	//MIDNIGHT BLUE PLANE
	["#fb321a", "#ff911a", "#e100f5", "#450eff", "#21006f"], 

	["#06f984", "#fde802", "#ffd11a", "#fc5d02", "#ff00f9"], /// Mercury's Horn

	["#aafec6", "#42fe90", "#00d98a", "#018c77", "#02515d"],  /// C.R.E.A.M

	["#FFDAF5", "#DEFFFA", "#FFDAF5", "#B0E1FF","#fff" ],  /// Polaris 
	//black theme
	["#d84800", "#f07800", "#483018", "#f07800","#000" ],   /// Birth of Hendrix 
		//BLAVENDAR
	["#6e0d60", "#DEFFFA", "#972688", "#B0E1FF","#000" ], /// Spacecraft Paradiso

	///black theme

	///yellow theme
	["#c75001", "#d43acc", "#de689f", "#e79771","#fbf017", "#f1c344"],  ///Doja's Delight

	['#688141', "#C48A4D", "#df9875", "#2F596F", "#A1819B"],  ///Circundum Cage


	['#fffd00', '#ff0000', '#fad300', '#cb0900', '#fff700']  /// the Plane of the Eternal Flame
] 

const renderConnect = () => {
	return <div>Press Up Arrow to Save</div> 
	// if (isAuthenticated) {
	// 	return <Button onClick={logout}>Logout</Button>
	// }
	// if (isAuthenticating) {
	// 	return <Button ><LinearProgress /></Button>
	// } 
	// else return <Button onClick={authenticate}>Connect </Button>
}

const setThemeAttribute = (i) => {
	console.log('set theme', i)
	if (i == 0) {
		return "Roz Vonos"
	}
	if (i == 1) {
		return "Midnight in Eden"
	}
	if (i == 2) {
		return "Kid's Amnesia"
	}
	if (i == 3) {
		return "C.R.E.A.M."
	}
	if (i == 4) {
		return "Mogwai Polaris"
	}
	if (i == 5) {
		return "Imaginarium Hendrix"
	}
	if (i == 6) {
		return "Spacecraft Paradiso"
	}
	if (i == 7) {
		return "Doja's Delight"
	}
	if (i == 8) {
		return "Cage's Silence"
	}
	if (i == 9) {
		return "Plane of the Eternal Flame"
	}
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
		// console.log('PRE LOAD', logo1)
   	// img1 = p5.loadImage(logo1)
    // img2 = p5.loadImage(logo2);
    // img5 = p5.loadImage(logo5);
		// img6 = p5.loadImage(logo6);
		// img7 = p5.loadImage(logo7);

    // img5 = null;
    // console.log('pload 2img', img1)
    // // images = [img1, img2, img5, img6, img7];
		// images = [logo1, logo2, logo5, logo6, logo7];
		// thisLogo = images[Math.floor(p5.random(images.length))];
    // img = images[Math.floor(p5.random(images.length))];
		// img = img5
		console.log('IMGAGE PL', img)

  }

  const setup = (p5, canvasParentRef) => {
		p5.loadImage(logo1, (img) => {
			testImage=img;
		});
		height=1080;
		width=1920;
    p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef)
    p5.angleMode(p5.DEGREES)
	  p5.imageMode(p5.CENTER);
    p5.rectMode(p5.CENTER)
    p5.pixelDensity(2)
		gridLake = false;
		p5.colorMode(p5.HSB, 360, 100, 100, 100);
		// p5.perspective(90, width/height, -10000, 0)

    
	//theming
	const themeIndex = Math.floor(p5.random(THEME_ARRAY.length))
  const thisTheme = setThemeAttribute(themeIndex);
	console.log('this theme', thisTheme)
	attributes.theme = thisTheme
  const theme = THEME_ARRAY[themeIndex]
  const skyIndex = Math.floor(p5.random(theme.length))
	skyColor = theme[skyIndex]
	theme.splice(skyIndex, 1);


	/// set up for sun
	if (realityCheck(80,p5)) {
		isSun = true;
		let sunIndex = Math.floor(p5.random(theme.length))
		sunColor = theme[sunIndex]
		theme.splice(sunIndex, 1);
		sun = new Sun(sunColor, p5);
		attributes.sun = true;
	}


	lineColor = theme[Math.floor(p5.random(theme.length))]
	// console.log('secondary', secondaryColor)
  starColor = theme[Math.floor(p5.random(theme.length))]
	mtnColors.push(theme[0], theme[1])
	moonColors.push(theme[1], theme[2])
	console.log('MoonCOlors', moonColors)

  // move = 1;
  hLine=0;
	p5.imageTint=p5.random(255);




	// for scaling logo
	// p5.rotateY(180)
	// img.resize(0, height/6) 
	p5.background(skyColor);
	



	// customDraw(p5, img)

	// setCustomSave(canvasParentRef)
	// const thePlane = p5.get()

	// thePlane.save()
	p5.noLoop()
  }

	const draw = (p5, testImage) => {
	console.log('TESTIMAGE', img)
			customDraw(p5, img)
		
	}

	const  customDraw = (p5, img) => {
 
		console.log('NEW IMAGE STUFF', img1)
		// p5.push()
		// p5.translate(0,0,-10)



		p5.push()

		newSky(p5)


		// p5.rotateZ(-90)
		// p5.arc(0, 0, 650, 650, p5.PI, 0);

    // p5.fill()

		if (realityCheck(25, p5)) {
			console.log('FLIING')
			attributes.inverted = true;
			p5.rotateZ(180);
			// p5.rotateX(180)
		}

		// 
		
		createMoons(moonColors, p5)
		createMtns(mtnColors, p5)

		p5.tint(255, p5.imageTint+= .25);

		if (isSun) {
			sun.display(p5)
		}

		displayMoons(p5)
		// displayMtns();
		
		displayMtns(p5);
		//error card iterator
		// p5.rotateX(-87)
		iterator(50, p5)
		p5.push()

		if (realityCheck(50, p5) && attributes.inverted) {
			p5.rotateX(180)
		}
		imageDecisions(p5)

		p5.pop()
		// iterator(p5)
		p5.pop()
		setNftAttributes(attributes)
		console.log('FINAL ATTRI', attributes)
		setIsLoading(false)
	// pop()
	}
  

  const iterator = (pct, p5) => {
    // for (var i = 0 ; i < width * 3; i += 22) {
    // let hLineY = hLine + i;
		let gridSize = 13
		// p5.camera(0,0,.1, 0, 0, -.1, 0, 1, 0);
		p5.push()
		p5.stroke(lineColor);
    p5.strokeWeight(.3);
		// p5.translate(0,0,100);
		if (realityCheck(10, p5)) {
			attributes.grid="horizontal"
			p5.rotateX(89)
			p5.strokeWeight(.1)
			for (var x = 0; x < width * 1.2; x += gridSize*4) {
				for (var y = 0; y < height * 1.2; y += gridSize * 4 ) {
	
					p5.line(0-width * 1.3, y * p5.random(1,1.75) , width * 1.3, y * p5.random(1,1.75) ) ;
					// p5.line(x-width/2, 0, x-width/2, height * 2);
				}
			}
		} else if (realityCheck(10, p5)) {
			attributes.grid="vertical"
			p5.rotateX(88.5)
      let modifier = p5.int(p5.random(1, 4))
			console.log('modifer', modifier)
			if (modifier == 2) {
				attributes.grid = "vertical abstract"
			}
			for (var x = 0; x < width * modifier; x += gridSize ) {
				for (var y = 0; y < height; y += gridSize ) {
					
					// p5.line(0-width/2, y * 2, width/2, y * 2  ) ;
					p5.line(x-width, 0, x-width, height* 2);
				}
			}

		} else if (realityCheck(60, p5)) {
		
			if (realityCheck(95, p5)) {
				p5.rotateX(88.5)
				attributes.grid="grid"
		 } else {
			attributes.grid="graph"
		 }

			for (var x = 0; x < width * 2; x += gridSize ) {
				for (var y = 0; y < height * 2; y += gridSize ) {
					// p5.circle(0-width/2, 0, 200, 200)
					p5.line(0-width * 1.3, y * 2, width * 1.3, y * 2  ) ;
					p5.line(x-width, 0, x-width, height * 2);
				}
			}

		} else {
			attributes.grid="none"
		}




		p5.pop()
    // if (hLine + move > height / 7 ) {
    //   hLine = -100;
    // } else {
    //   hLine += .01
    // }
    // move += .01;
  // }
}



function getX(i, p5) {
	let x;
	if (i%2 == 0 ) {
		x = p5.random(100, width/2)
		return x
	}	else {
		x =p5.random(-width/2, -450)
		// x = -1500;
		return x
	}	// return x
}


function imageDecisions(p5) {
	if (realityCheck(50, p5)) { //no
		images = [logo1, logo5];
		const imgIndex = Math.floor(p5.random(images.length))
		console.log('IMGAGE INDEX', imgIndex)
		thisLogo = images[imgIndex];
		if (imgIndex == 0) {
			attributes.logo = "Pyramid"
		}
		if (imgIndex == 1) {
			attributes.logo = "Key Hole"
		}
		console.log('ABOUT TO LOAD IMAGE')
		p5.loadImage(thisLogo, thisLogo => {imagePlacement(thisLogo, p5)});
	} else return
}

const imagePlacement = (thisImg, p5) => {
 //no image
		if (realityCheck(75, p5)) { // stdrd image
			attributes.logoType = "Locked"
			p5.image(thisImg, 0, -thisImg.height/2 + 27, 102, 94)
			// console.log('img height', thisImg.height, 204, 190)

			
			} 
			else { // anwhere image
				attributes.logoType = "Free"
				p5.image(thisImg, p5.random(width/2), -thisImg.height/2 + 27, 102, 94)
			
			}
}

function realityCheck(percent, p5) {
	const check = p5.random(0,100);
	return percent > check ? true : false
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

class Moon {
	constructor (moonColors, p5) {
		this.circum = p5.random(75, 220)
		this.vert = p5.random(-height/2, -100)
		this.moonSpot = Math.floor(p5.random(2,4))
		this.horiz = this.moonSpot < 3 ? p5.random(-width/2,-400) : p5.random(width/2, 400)
		this.moonColors = moonColors
		console.log('MOON height', this.vert)

		this.moonColor = p5.random(moonColors)
		// this.moonColor.setAlpha(128 + 128 * sin(millis() / 1000));
	}
  display(p5){
		p5.noStroke()
		p5.fill(this.moonColor);
		p5.circle(this.horiz, this.vert, this.circum);
	}
}

function createMoons (theme, p5) {
	let moonNumber = Math.floor(p5.random(0,3));
	attributes.moons = moonNumber;
	for (let i=0; i < moonNumber; i++) {
		let newMoon = new Moon(theme, p5);
		moons.push(newMoon)
	}
	// return newMoons;
}

function displayMoons(p5) {
	for (let i=0; i < moons.length; i++) {
		moons[i].display(p5)
	}
}


class Mtn {
	constructor (mtnColors, i, p5) {
		// this.circum = p5.random(125, 450)
		this.vert = p5.random(-400, 100)
		this.mtnSpot = Math.floor(p5.random(2,4))
		this.mtnColors = mtnColors
		this.colorIndex = Math.floor(p5.random(0,2))
		this.mtnColor = p5.color(this.mtnColors[this.colorIndex]);
		// this.mtnColor.setAlpha(128 + 128 * sin(millis() / 1000));
		this.mtnX = getX(i, p5)
		this.mtnWidth = p5.random(250, 650 )
		this.mtnX3 = this.mtnX + this.mtnWidth
		this.mtnHeight = p5.random(150, 300) * -1;
	}
  display(p5){
		p5.noStroke()
		p5.fill(this.mtnColor);
    // p5.push()
		// realityCheck(25) ? rotateY
    p5.push()
    invertMtnsCheck(p5)
    // p5.rotateY(180)
    //// MEED TP FIX THIS FOR UPSIDE MTNS
		// () => { return realityCheck(50) ? p5.rotateY(180) : null};
		p5.triangle(this.mtnX, 0, this.mtnX + (this.mtnWidth/2), this.mtnHeight, this.mtnX3, 0);
		p5.pop()
	}
}

const invertMtnsCheck = (p5) => {
  let x = realityCheck(25, p5) ? p5.rotateX(180) : null
  return x
}

function createMtns (theme, p5) {
	let mtnNumber = Math.floor(p5.random(0,5));
	attributes.mountains = mtnNumber;
	for (let i=0; i < mtnNumber; i++) {
		let newMtn = new Mtn(theme, i, p5);
		mtns.push(newMtn)
	}
	// return newMoons;
}

function displayMtns(p5) {
	for (let i=0; i < mtns.length; i++) {
		mtns[i].display(p5)
	}
}



function keyPressed(p5) {
  if (p5.keyCode === p5.UP_ARROW) {
    p5.save('vapor-plane.png')
  } else {
   return
  }
}

const  resetFrame = (p5) => {
	window.location.reload(false);
}


function newSky(p5) {
	p5.translate(0,0,-1280)
  // p5.strokeWeight(25 / 15);
   let chooseSky = p5.int(p5.random(0,9))

	p5.fill(starColor)
	p5.noStroke()
	if (chooseSky == 0) {
		attributes.sky="matrix"
		for (var i = 0; i < width*3 ; i+=30) {
			for (var j = 0; j < height*1.5 ; j+= 15) {
				if (realityCheck(25, p5)) {
					p5.ellipse(i-width*1.5, j-height*1.5, 7, 7)
				}
			}
		}
	} 
	if (chooseSky == 1) {
		attributes.sky="stars"
		for (var i = 0; i < 2000 ; i+=1) {
		p5.ellipse(p5.random(-width*1.5, width*1.5),p5.random(-height*1.5), 5, 5 )
		}
	}
	else {
		return 
	}

}







//// SAVE STUFF
const blobToFile = (theBlob, fileName) => {
	theBlob.lastModifiedDate = new Date();
	theBlob.name = fileName;
	return theBlob;
};

const b64toBlob = (dataURI) => {
	const byteString = atob(dataURI.split(',')[1]);
	const ab = new ArrayBuffer(byteString.length);
	const ia = new Uint8Array(ab);
	
	for (let i = 0; i < byteString.length; i++) {
			ia[i] = byteString.charCodeAt(i);
	}
	return new Blob([ab], { type: 'image/jpeg' });
}


const saveMe = async (p5) => {
	// console.log('save', nftAttributes)
	// const id = 1;
	// const canvas = document.querySelector('canvas')
	// const dataUrl = canvas.toDataURL("img/png");
	// const blob = b64toBlob(dataUrl, "image/png");
	// const fileName = id + "-" + "vapor_plane.png";
	// const file = blobToFile(blob, fileName);



	// try {
	// 	const serial = "test"
	// 	const addedFile = await client.add(file)
	// 	const imageUrl = `https://ipfs.infura.io/ipfs/${addedFile.path}`

	// 	let attArr = []
	// 	// console.log('URL HOMIE', url)
	// 	// const attributes = {image: iamgeUrl, ...nftAttributes}
	// 	for (const [key, value] of Object.entries(nftAttributes)) {
	// 		attArr.push({
	// 			trait_type: key,
	// 			value: value
	// 		})
	// 	}
	// 	let metaData = {
	// 		description: "",
	// 		external_url: "https://ps37.space/vaporplanes",
	// 		image: imageUrl,
	// 		attributes: attArr,
	// 		name: `Vapor Plane #${serial}`

	// 	}

	// 	const addedMetaData = await client.add(JSON.stringify(metaData))
	// 	const metaURI = `https://ipfs.infura.io/ipfs/${addedMetaData.path}`
	// 	console.log('meta data', metaURI)
	// 	const { status } = await mintNFT(metaURI);
	// 	console.log('STATUS', status)
  //   setStatus(status);
	// }
	// catch (err) {
	// 	console.log('SAVE ERROR', err)
	// }


	setInfo(true)
	// console.log(dataUrl)
 }


 //// wallet connect stuff

 const connectWalletPressed = async () => { //TODO: implement
	const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
 };
 const onMintPressed = async () => { //TODO: implement
 };


const addWalletListener = () => {

}

const fadeOut = () => {
  // setPreFadeOut(true)
	// setTimeout(() => {
	// 	setInfo(false)
	// }, 500)
}


  return (
    <div id='canvas-parent' className="future vaporplanes">
     <div className="sketch-wrapper">
			<Sketch setup={(...args) => setup(...args)}  preload={(...args) => preload(...args)} keyPressed={(...args) => keyPressed(...args)} draw={(p5, img) => draw(p5, img)}/>
		 </div>
		 
		 {isLoading && 
		 <div className="loading-screen-wrapper">
			<div className="vapor-loading">
				<GridLoader color={'#6e0d60'} isLoading={true}
					css={override} size={40} />
					
					
					<h4>Creating a new ethereal plane...</h4>
					{/* <p>creating new plane</p> */}
				</div>  
			</div>
			 
			 }


      <div className="vp-content">
        <h3 onClick={resetFrame}>Create New Plane</h3>
				{/* <h3 onClick={(e, p5) => saveMe(e, p5)}> Information</h3> */}
				<h3 onMouseOver={() => setInfo(true)}  onMouseOut={() => setInfo(false)}> Information</h3>
			  <h3>{renderConnect()}</h3> 
					
				<div className="vapor-link">
					<Link href="/"> 
         		<div className="vaporlink-img"><img src={logo} /></div>
      		</Link>
					{/* <a href="https://instagram.com/ps37durham/?hl=en" target="_blank" rel="noreferrer" className="vp-social">
						<img src={igLogo} />
						 </a> */}
				</div>
				
      </div>
			<div className={info ? "nft-fo fade-in" : "nft-fo fade-out"}>
				{/* <div className="close" onClick={() => setInfo(false)}>X</div> */}
				<p>Each vapor plane is randomly generated using p5.js. There are billions of possible and unpredictable combinations. Press up arrow to save.</p>
					
				{/* <p> Vapor Plane NFTs will provide additional benefits and access to PS37 including future airdrops, NFT tickets to IRL or metaverse events, as well as merchandise, art printsgi, and discounts on event tickets and space rental.</p> */}
			</div> 
			{nftAttributes && info && <MetaInfo meta={nftAttributes} info={info} /> }

			
    </div>
  )
}

export default P5Vapor