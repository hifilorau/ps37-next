import React from 'react'
// import Sketch from 'react-p5'
// import logo from '../public/images/ps37-key-05.png'
// import './future.css'
const Future = () => {
  
//   let move;
//   let hLine;
//   let red=0;
//   let green=0;
//   let blue=0;
//   let sun=400;
//   let sun1 = 400;
//   let sun2=500
//   let height, width;
//   let img;
//   let sun1Width;
//   let sun2Width;

//   const preload = (p5) => {
//     img = p5.loadImage(logo);
//   }
//   const setup = (p5, canvasParentRef) => {
//     p5.createCanvas(p5.windowWidth, p5.windowHeight, p5.WEBGL).parent(canvasParentRef)
//     p5.angleMode(p5.DEGREES)
// 	  p5.imageMode(p5.CENTER);
//     move = 1;
//     hLine=0;
// 	  p5.imageTint=0
//   	height = p5.windowHeight;
//   	width = p5.windowWidth;
// 	  sun1Width = width/6
//   	sun2Width = width/9
//   }
  
//   const draw = p5 => {
//     p5.background(red=red+.5, green=green+.5, blue);
//     p5.rotateX(88);
//     // rotateX(90);
//   // rotateZ(10);
//     p5.translate(0, 0, -14);
//   // translate(-width/2,-width/2, -2)
//     iterator(p5)
// 	// push()
// 	// 	rotateX(-88)
// 	// 	image(img, 0, -125, 340, 260);
// 	// pop()
// 	  p5.push()
// 		// translate(-50, -200)  fill(255, 165, 0, 50);
// 		p5.rotateX(-88);
// 		p5.tint(255, p5.imageTint=p5.imageTint + .25);
// 		if (p5.imageTint == 255) {
// 			p5.tint(255, 255);
// 		}
// 		p5.image(img, 0, 0-img.height/1.85);
//     img.resize(150,0)
//     // p5.stroke(255, 100, 0);
// 		p5.fill(222,222, 0);
// 		// if(sun>-301){
// 		// 	p5.circle(-300, sun=sun-1.4, sun1Width);
// 		// }
// 		// else if(sun<=-301){
// 		// 	p5.circle(-300, sun, sun1Width);
// 		// }
//     if(sun1>=-20){
// 			p5.circle(-300, sun1=sun1-1.4, sun1Width);
// 		}
// 		else if(sun1<=-20){
// 			p5.circle(-300, -20, sun1Width);
// 		}
// 		//inner
// 		p5.noStroke();
// 		p5.fill(255, 100, 0, 145);
// 		if(sun2>-300){
// 			p5.circle(width/4, sun2=sun2 - 2.2, sun2Width);
// 		}
// 		else if(sun2<=-300){
// 			p5.circle(width/4, sun2, sun2Width);
// 		}  
	
// 		p5.noStroke();
// 		p5.fill(150, 75, 0);
// 		p5.triangle(0 - width/2, 0, 0 - width/2 + 250, -300, 0 - width/2 + 500, 0);
// 		p5.fill(150, 120, 20, 165);
//     p5.triangle(width/4, 0, width/3, -200, width/2, 0);

//     p5.pop()
//   }

//   const iterator = p5 => {
//     for (var i = 0 ; i < width * 3; i += 12) {
//     let hLineY = hLine + i;
//     p5.stroke('#83224f');
//     p5.strokeWeight(.3);
//     //vert line
//   	p5.line(i - height, 0, i - height, height * height);
//     //h line
//   	p5.line(width * 2, hLine + i, 0 - height, hLine + i);
//     if (hLine + move > height / 7 ) {
//       hLine = -100;
//     } else {
//       hLine += .01
//     }
//     // move += .01;
//   }
// }



  return (
    <div className="future">
      {/* <Sketch setup={setup} draw={draw} preload={preload} /> */}
      <div className="future-content">
        {/* <h3>Coming Soon to a Metaverse Near You</h3> */}
      </div>
    </div>
  )
}

export default Future