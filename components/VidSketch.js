import dynamic from 'next/dynamic'
import styles from '../styles/Home.module.css'
import { P5Instance, Sketch, P5WrapperProps } from 'react-p5-wrapper'
const ReactP5Wrapper = dynamic(() => import('react-p5-wrapper')
    .then(mod => mod.ReactP5Wrapper), {
    ssr: false
}) 

 const sketch = (p5) => {

  let cnv, height, width, videoElement;
  let snowflakes = [];
   // array to hold snowflake objects
  
  p5.preload = () => {
    videoElement = p5.createVideo(['pstest.mp4']);
    console.log(videoElement)
  }
  p5.setup = () => {
    height = p5.windowHeight
    width=   p5.windowWidth
    cnv = p5.createCanvas(width, height)

    videoElement.volume(0);
    // videoElement.play();


    // p5.filter(p5.INVERT);
    // videoElement.hide();
    p5.noStroke();
    p5.fill(255);
    videoElement.loop();
  }
  
  p5.draw = () => {
    videoElement.autoplay();


  //   p5.background(0);
  //   videoElement.loadPixels();
  //   const stepSize = p5.round(p5.constrain(2/ 8, 6, 32));
  //   for (let y = 0; y < height; y += stepSize) {
  //     for (let x = 0; x < width; x += stepSize) {
  //       const i = y * width + x;
  //       const darkness = (255 - videoElement.pixels[i * 4]) / 255;
  //       const radius = stepSize * darkness;
  //       p5.ellipse(x, y, radius/4, radius);
  //     }
  //   }
  }

}

const VidSketch = () => {
 return (
   <div id='canvas-parent' className={styles.snow}>
     <div className="sketch-wrapper">
      <ReactP5Wrapper 
        sketch={sketch}/>
		 </div>
     
   </div>
 )
}

 export default VidSketch