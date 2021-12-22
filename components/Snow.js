import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
const Sketch = dynamic(() => import("react-p5"),
  { ssr: false }
) 


const Snow = () => {
let cnv, height, width;
let snowflakes = [];
 // array to hold snowflake objects

const setup = (p5, canvasParentRef) => {
  height = p5.windowHeight
  width=   p5.windowWidth
  cnv = p5.createCanvas(width, height).parent(canvasParentRef)
  p5.fill(244, 232, 232);
  p5.noStroke();
}

const draw = (p5, canvasParentRef) => {
  p5.background('black');
  let t = p5.frameCount / 60; // update time
  // create a random number of snowflakes each frame
  for (let i = 0; i < p5.random(5); i++) {
    snowflakes.push(new Snowflake(p5)); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t,p5); // update snowflake position
    flake.display(p5); // draw snowflake
  }
}

// snowflake class
class Snowflake {
  constructor(p5) {
  // initialize coordinates
  this.posX = 0;
  this.posY = p5.random(-50, 0);
  this.initialangle = p5.random(0, 2 * p5.PI);
  this.size = p5.random(1.2, 3);
  
  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = p5.sqrt(p5.random(p5.pow(width / 2, 2)));
  }

  update(time, p5) {
    // x position follows a circle
    let w = 0.6; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius/2.2 * p5.sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += p5.pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > height) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  display(p5) {
    // console.log("DISPLAY", this.posX)5
    p5.ellipse(this.posX, this.posY, this.size);
  };

  }



 return (
   <div id='canvas-parent' className={styles.snow}>
     <div className="sketch-wrapper">
      <Sketch 
       setup={(...args) => setup(...args)}  
      //  preload={(...args) => preload(...args)} 
      //  keyPressed={(...args) => keyPressed(...args)} 
       draw={(p5, img) => draw(p5, img)}/>
		 </div>
     
   </div>
 )

 }

 export default Snow