import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import {Container, Button, LinearProgress} from '@mui/material/';
// import Sketch from 'react-p5'
import { useMoralis, useMoralisWeb3Api, useMoralisQuery } from "react-moralis";
const Sketch = dynamic(() => import("react-p5").then((mod) => {
  // importing sound lib ONLY AFTER REACT-P5 is loaded
  require('p5/lib/addons/p5.sound');
  // returning react-p5 default export
  return mod.default
}), {
  ssr: false
});




const Joystick = () => {
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


let width, height, playfield, fallingPiece, selectShape, song, amp, bass, treble, mid, mainFont, building;
let shapes = [];
let volHistory = [];
let buildings = []
let ampHistory;
const NUMBER_OF_PIECES=800;
let boardWidth = 500;
let boardHeight = 500;
const levelThreshold = 37
const backgroundDark = '#1A1423'
const backgroundLight = "#EACDC2"
let growRectD = 0;
const INTRO = 5.5;
const V1 = 60;  
const CHORUS1 = 84;
const BREAK= 96;
const V2 = 120;
const C2B = 142;
const CHORUS2 = 180;

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
    p5.soundFormats('wav', 'mp3');
    mainFont = p5.loadFont('fonts/press-start-2p/PressStart2P.ttf')
    song = p5.loadSound('/joystick-4-9b.mp3');
  }

  const setup = (p5, canvasParentRef) => {
		// p5.loadImage(logo1, (img) => {
		// 	testImage=img;
		// });
		height=p5.windowWidth
		width=p5.windowHeight
    let cnv = p5.createCanvas(width, height, p5.WEBGL).parent(canvasParentRef)
    p5.angleMode(p5.DEGREES); 
    // background(0);
    let newCanvasX = (height - boardWidth)/2;
    let newCanvasY = (width - boardHeight)/2;
    cnv.position(newCanvasX, newCanvasY);
    cnv.mousePressed((event) => {
      console.log("Clicked on the canvas. Event:", event)
      startBoard(p5);
      if (song.isPlaying()) {
        
        // .isPlaying() returns a boolean
        song.stop();
     
      } else {
        song.play();
        clearBoard();
        amp = new p5.Amplitude();
        fft = new p5.FFT(.9,128)
      
      }
    })


  }

	const draw = (p5) => {
	  p5.background(255);
 //for testint
  // growRect()
  // city();
  
  // treble = fft.getEnergy("treble");
  // mid = fft.getEnergy("mid");
  if (song.isPlaying()) {
    let bass = p5.fft.getEnergy("bass");
    let mids = p5.fft.getEnergy("mid");
    let high = p5.fft.getEnergy("treble");
    var level = p5.amp.getLevel();
   
    // dropBlocks()
    // console.log('level', level);

    if (level > .53) {
      // console.log('mid', level);
      // console.log('mid', mids);
      // console.log(song.currentTime(), "time")
    }
    // console.log(song.currentTime(), "time")
    let spectrum = fft.analyze();
    // console.log(INTRO);
    if (song.currentTime() < INTRO) {
      // console.log('YO YO YO ')
      dropBlocks(spectrum, 0)
    }
    if (song.currentTime() > INTRO && song.currentTime() < V1) {
      dropBlocks(spectrum, level)
    }

    //chorous
    if (song.currentTime() > V1 && song.currentTime() < CHORUS1) {
      background(backgroundDark);
      dropBlocks(spectrum, level);
      city();
    } 

    //break
    if (song.currentTime() > CHORUS1 && song.currentTime() < BREAK) {
      backgroundFlip();
      growRect();
    }

    //second verse
    if (song.currentTime() > BREAK && song.currentTime() < V2) {
      p5.background(backgroundLight)
      dropBlocks(spectrum, 0);
    }

    //last chorus

    if (song.currentTime() > V2 && song.currentTime() < CHORUS2) {
      backgroundFlip();
      dropBlocks(spectrum, level);
    } 

    if (song.currentTime() > CHORUS2) {
      background(backgroundDark)
      dropBlocks(spectrum, level);
    } 

  } else {
    showPressStartText(p5);
  }
    // p5.push()

	  // p5.pop()		
	}

  function growRect(){
    rectMode(CENTER);
    fill(0)
    rect(width/2, height/2, growRectD, growRectD)
    growRectD = growRectD + .66;
  }

  function dropBlocks(spectrum, level) {
    noStroke();
    for (let i = 0; i < spectrum.length * 5; i++) {
      let amp = spectrum[i];
      const levelMod = level * 500;
      // console.log('wtf', level);
      let x = map(amp, 0, 256, height, 0);
      shapes.push(new Shape(x, random(0, -7000), boardHeight))
      shapes[i].show(level);
     
      let levelState = false;
      if (levelMod > levelThreshold) {
        levelState = true;
        shapes[i].moveRight(levelMod);
      }
      if (levelState == true && levelMod < levelThreshold) {
      shapes[i].moveLeft(levelThreshold);
      shapes[i].moveDown()
      } else {
        shapes[i].moveDown();
      }
    }
  }
  
  function mouseClicked() {
    startBoard();
    if (song.isPlaying()) {
      
      // .isPlaying() returns a boolean
      song.stop();
   
    } else {
      song.play();
      clearBoard();
      amp = new p5.Amplitude();
      fft = new p5.FFT(.9,128)
    
    }
  }
  
  function backgroundFlip() {
    if (random(10) > 3) {
      background(backgroundLight)
    } else {
      background(backgroundDark);
    }
  }

  const showPressStartText = (p5) => {
    let s = 'Press Start';
    p5.textFont(mainFont);
    p5.textSize(23);
    p5.fill("#EACDC2")
    p5.text(s, width/2, height/2);
    p5.textAlign(p5.CENTER, p5.CENTER);
  }

  function startBoard(p5) {
    for (let i = 0; i < NUMBER_OF_PIECES; i++) {
      shapes.push(new Shape(boardWidth, p5.random(0, -7000), boardHeight))
    }
  }
  
  function clearBoard() {
    shapes = [];
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

const themePurp = ['#372549', '#774C60', "#B75D69", "#EACDC2"]
const themeOG = ["#4f5bdb", "#00a4b2", "pink", "yellow"];
let myColors = themePurp;


class Shape {
	constructor(boardWidth, y, boardHeight, p5) {
    this.randCol = Math.floor(p5.random(myColors.length)) 
		// cells of this piece
		this.boardHeight = boardHeight
		this.size = random(10, 20)
		this.velocity = random(1.5,3)
		// this.size = this.cells.length; // assumed square matrix
    // this.startingX = floor(random(25));


		// drawing sizes
		// this.cellSize = playfield.cellSize;
		// this.offset = playfield.borderSize;

		// position of top-left piece relative to playfield
		// this.x = x === undefined ? floor((playfield.cols - this.size) / 2) : x;
    this.x = random(boardWidth);
		this.y = y;
		


	}
	
	
	update(time) {
		this.dropBuffer += time;
		this.y++;
	}
	

	timeToFall() {    
		return this.dropBuffer > this.dropInterval
	}
	
	resetBuffer() {
		this.dropBuffer = 0;
	}

	copy(piece) {
		this.x = piece.x;
		this.y = piece.y;
		this.cells = piece.cells
	}

	
	show() {
	
		// let xLocation = this.x + level;
		fill(myColors[this.randCol]);
		noStroke();
		rect(this.x, this.y , this.size, this.size);
	
		// for each non-null cell in this piece, fill in
		// the specified color and draw the rectangle
		// for (let row = 0; row < this.size; row++) {
		// 	for (let col = 0; col < this.size; col++) {

		// 		if (this.cells[row][col]) { 
		// 			// let x = this.x + col;
		// 			// let y = this.y + row;
          
    //       let x = this.startingX + col;
		// 			let y = this.y + row;

		// 			let cs = this.cellSize;
		// 			let off = this.offset;

		// 			fill(myColors[this.randCol]);
		// 			rect(off + cs * x, off + cs * y, cs-1, cs-1);
		// 		}

		// 	}
		// }

	}


	moveDown(level) {
		this.y = this.y + this.velocity;
		if (this.y > this.boardHeight) {
			this.y = 0;
		}
		// this.moveDown()
	}
	moveRight(level) {
		if (this.x > boardWidth) {
			this.x = 0 - (level * random(25));
		} else {
			this.x = this.x + level;
		}
	}

	moveLeft(level) {
		this.x = this.x - level
	}
	moveUp() {
		this.y--;
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
			<Sketch setup={(...args) => setup(...args)}  preload={(...args) => preload(...args)} keyPressed={(...args) => keyPressed(...args)} draw={(...args) => draw(...args)}/>
		 </div>	
    </div>
  )
}

export default Joystick;