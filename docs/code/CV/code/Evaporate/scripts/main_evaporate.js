let capture;
let w = 640;
let h = 480;
let easing = 0.01;
let threshold = 80;
let threshold02 = 120;
let slider;

function windowResized() {
    resizeCanvas();
}

function setup() {
  let canvas = createCanvas(640,480);
  canvas.parent("#evaporatesketch");
  //canvas.position(0,0);
  canvas.style('z-index','-1');
  capture = createCapture(VIDEO);
  pixelDensity(1);
  capture.hide();
  // background(0);
  slider = createSlider(0, 255, 100);
}

function draw() {
  //background(220);
  
  //loadPixels();
  capture.loadPixels();
  let val = slider.value();
  
  // for(i = 0; i <10; i++) {
  //   let x = random(width);
  //   let y = random(height);
  //   let c = capture.get(int(x),int(y));
  //   let c2 = capture.get(int(y), int(x));
    
      for(let y = 0; y < h; y+=10) {
        for(let x = 0; x < w; x+=10) {
          
          let randX = floor(random(width));
          
          
          let randY = floor(random(height));
         
          
          let index = (randX + randY * w) * 4;
      
          // let r = capture.get(int(x),int(y));
          // let g = capture.get(int(x),int(y)+1);
          // let b = capture.get(int(x),int(y)+2);
          
          let r = capture.pixels[index];
          let g = capture.pixels[index+1];
          let b = capture.pixels[index+2];
          
          let c = [r, g, b];
          let c2 = [g, r, b];
      
          let totalBrightness = r + g + b;
          let brightness = totalBrightness/3.0; 
          let brightness2 = totalBrightness/3.0; 
          
             if(threshold > brightness) {
//                let targetX = mouseX;
  
//               // dx == the change in x
//               let randX = targetX - x;
//                x += randX * easing;
              fill(c);
              noStroke();
              ellipse(randX,randY,1,1);
             
            } else if(threshold02 > brightness) {
               fill(c);
              noStroke();
              ellipse(randX,randY,3,3);

            }
        }
      } 
      // return;
  //}
  
  threshold = val;
  
  //updatePixels();
}