import dynamic from 'next/dynamic'
import React from 'react'
import styles from '../styles/Support.module.css'
const Sketch = dynamic(() => import("react-p5"),
  { ssr: false }
) 


const Bike = () => {
let x, y, colorChoice, bike,ps37, bikeMove, grid, baseSize, font, triangleWidth, theme, size, eyeMod, primary, secondary, tertiary, pyramidC, height, width;
const COLORTHEMES = [
  // {
  //   primary: "black",
  //   secondary: "white",
  //   tertiary: "gray"
  // },
  {
    primary: "black",
    secondary: "purple",
    tertiary: "green"
  },
  // {
  //   primary: "white",
  //   secondary: "#f93e58",
  //   tertiary: "black"
  // },
  // {
  //   primary: "purple",
  //   secondary: "black",
  //   tertiary: "violet"
  // },
  // {
  //   primary: "#02515d",  
  //   secondary: "#018c77",
  //   tertiary: "#00d98a"
  // },
  // {
  //   primary: "#de689f",  
  //   secondary: "#d43acc",
  //   tertiary: "#c75001"
  // },
 
]
 // array to hold snowflake objects
 function preload (p5) {
  font = p5.loadFont("/fonts/press-start-2p/PressStart2P.ttf")
  bike = p5.loadImage("/excitebike.png")
  ps37 = p5.loadImage("/ps37-8b.png")

}

const setup = (p5, canvasParentRef) => {
  width = document ? document.getElementById("eightbit").offsetWidth : null;

  const themeIndex = p5.floor(p5.random(COLORTHEMES.length))
  // const themeIndex = 1
  const theme = COLORTHEMES[themeIndex]
  primary= theme.primary
  secondary = theme.secondary
  pyramidC=theme.tertiary
  tertiary=theme.tertiary
  p5.createCanvas(width, 400, p5.WEBGL).parent(canvasParentRef)
  height = p5.height;
  p5.angleMode(p5.DEGREES)
  triangleWidth = p5.width * .5;
  bikeMove=p5.width * .123
  x= 0;
  baseSize = 8;
  eyeMod = .34
  p5.noStroke()
  p5.frameRate(10)
  p5.textFont(font)
  p5.textSize(15)
}

const draw = (p5, canvasParentRef) => {
  p5.background(primary);
  p5.translate(-p5.width/2,-p5.height/3.78,0)
  p5.strokeWeight(1)
  drawSky(p5)
  drawRoad(p5)
  if (width < 600) {
    p5.image(ps37, 40, 15)
    ps37.resize(500, 0)
  } else {
    p5.image(ps37, width/2.5, -40)
  }
  
  bike.resize(70, 70);
 
  // drawTriangle(p5)
  driveBike(p5)
  // p5.push()
  // translate(0,0, -1000)
  // rotateX(.5)
  // p5.translate(0, 0, 0)
  // p5.push()
  // p5.rotateX(51)
  // p5.translate(0, 125 , 10)
  // drawGrid(p5)
  // p5.pop()
  // setTimeout(() => {
  //   drawSky(p5)
  //   drawTriangle(p5)
  // }, 1000)



  
  // push()
  // translate(7, -120)
  p5.fill(pyramidC || "#D46A6A")
 

  // pop()
  // drawText(p5)
    // translate(0,0, -500)
  // drawTriangles()
  // p5.stroke(secondary || "#f93e58")
  
}

function drawTriangles (p5) { 
  p5.fill('violet')
  p5.drawTriangle(0)
  // drawTriangle(size)
  // drawTriangle(size * 2)
  //  drawTriangle(size * 3)
  //  drawTriangle(size * 4)
  
}

function drawSky (p5) {
    p5.fill(secondary)
    p5.noStroke()
    for (var i = 0; i < width ; i+=30) {
      for (var j = 0; j < height * .5 ; j+= 15) {
        const happening = realityCheck(25, p5)
          if (happening) {
            p5.rect(i, j, 5, 5)
          }
      }
    }
}

const driveBike = (p5) => {
  if(bikeMove > width) {
    bikeMove = -100;
    p5.image(bike, bikeMove, p5.height * .52)
  }
  else {
  p5.image(bike, bikeMove, p5.height * .52)
  bikeMove+=20
  }
}

function realityCheck(percent, p5) {
	const check = p5.random(0,100);
	return percent > check ? true : false
}

function drawTriangle (p5) {
  p5.fill(tertiary)
  p5.triangle(p5.width/2 - 150, p5.height/2, p5.width/2, p5.height * 0.25, p5.width/2 + 200, p5.height/2)
  p5.fill(secondary)
  p5.triangle(p5.width/2 - 150, p5.height/2, p5.width/2, p5.height * 0.25, p5.width/2 + 150, p5.height/2)
  drawEye(p5)
}

function drawText (p5) {
      // push()
      p5. fill(tertiary);
      p5.textAlign(p5.CENTER, p5.CENTER);
  if (realityCheck(90, p5)) {
    p5.text('Ready for DAO?',width/2, height/2.3);
  } else {
      p5.text('BIG WINS?! LFG',width/2, height/2.3);
  }

     // pop()
}

const drawRoad = (p5) => {
// let ?å
p5.push()
p5.fill(secondary)
p5.strokeWeight(1)
// p5.rotateX(44)
// p5.translate(0, 77, 0)
// p5.rect(-100, p5.height*.75, 100, 7)
// p5.rect(100, p5.height*.75, 100, 7)
// p5.rect(300, p5.height*.75, 100, 7)
// p5.rect(500, p5.height*.75, 100, 7)
// p5.rect(700, p5.height*.75, 100, 7)
// p5.rect(900, p5.height*.75, 100, 7)
// p5.rect(1100, p5.height*.75, 100, 7)
// p5.rect(1300, p5.height*.75, 100, 7)
// for(let i = -200; i < p5.width; i+=80) {

//   if (x > 100) {
//     x = 0;
//     p5.rect(0, p5.height/2 + x, p5.width, 2)
//     // p5.rect((p5.width - i) - x, p5.height*.75, 70, 5)
//     // p5.rect(0, 0, 200, 200)
//     x+=9
//   } else {
//     // p5.rect((p5.width - i) - x, p5.height*.75, 70, 5)
//     // p5.rotateX(45)
//     p5.rect(0, p5.height/2 + x, p5.width, 2)
//     p5.rect(20, p5.height/2, 2, p5.height)
//     x+=9;
//   }


for(let i = -200; i < p5.width; i+=200) {

  if (x > 200) {
    x = 0;
    p5.rect((p5.width - i) - x, p5.height*.75, 70, 5)
    // x++
  } else {
    p5.rect((p5.width - i) - x, p5.height*.75, 70, 5)
    x+=3;
  }

  
  // p5.rect(i + 200, p5.height*.75, 100, 7)
}

p5.pop()
}

function drawGrid (p5) {
p5.push()
p5.rotateX(45)
p5.fill(secondary)
   for (var i = 0; i < width; i+=15) {
      for (var j = 0; j <= height * 2; j+= 15) {
        p5.line(i, height/2, i, height)
        p5.line(-100, height /2 + j, width + 100, height /2 + j )
      }
    }
  p5.pop()

}

function drawEye (p5) {
  if (p5.frameCount % 24 == 0 || p5.frameCount % 16 == 0 ) {
    p5.fill(secondary)
    p5.ellipse(width/2, height * eyeMod, 40, 20)
  // fill('black')
    p5.stroke(tertiary)
    p5.line(width/2 - 20, height * eyeMod -3, width/2 + 20, height * eyeMod -3)
  // line(width/2 - 20, height * eyeMod, width/2 + 20, height * eyeMod)
    
    //lashes
    p5.line(width/2 - 15, height * eyeMod  + 3, width/2 -15, height * eyeMod - 7 )
    p5.line(width/2 - 10, height * eyeMod  + 3, width/2 -10, height * eyeMod - 7 )
    p5.line(width/2 - 4, height * eyeMod  +3, width/2 -4, height * eyeMod -7)
    p5.line(width/2 , height * eyeMod  + 3, width/2, height * eyeMod -7)
    p5.line(width/2 + 4 , height * eyeMod  + 3, width/2 + 4, height * eyeMod -7)
    p5.line(width/2 + 10 , height * eyeMod  + 3, width/2 + 10, height * eyeMod -7)
    p5.line(width/2 + 15 , height * eyeMod  + 3, width/2 + 15, height * eyeMod -7)
  } else {
    p5.fill('black')
    p5.ellipse(width/2, height * eyeMod, 50, 22)
    p5.fill('red')
    p5.ellipse(width/2, height * eyeMod, 15, 22)
    p5.fill('yellow')
    p5.ellipse(width/2, height * eyeMod, 10, 10)
    p5.fill('black')
    p5.ellipse(width/2, height * eyeMod, 4, 4)
  }
}



 return (
   <div id='canvas-parent' className={styles.snow}>
     <div className="sketch-wrapper" id="eightbit">
      <Sketch 
       setup={(...args) => setup(...args)}  
       preload={(...args) => preload(...args)} 
      //  keyPressed={(...args) => keyPressed(...args)} 
       draw={(p5, img) => draw(p5, img)}/>
		 </div>
     
   </div>
 )

 }

 export default React.memo(Bike)