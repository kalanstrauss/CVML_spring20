// 04.01-SingleLerp: Make a single ellipse interpolate between two ellipses. Your
// color choices and canvas size can be unique. (hint: use a sine function to make your ellipse oscillate between the two other ellipses).

let w = 500;
let h = 500;
let size = 20;

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch");
  angleMode(DEGREES);
}

function draw() {
  background(255, 255, 255); 
  
  let v1 = createVector(w/1.35,h/1.35);
  let v2 = createVector(w/4,h/4);
  
  let lerpValue = map(sin(frameCount), -1, 1, 0, 1);
  let v3 = p5.Vector.lerp(v1,v2,lerpValue);
  
  fill(255,255,0);
  ellipse(v1.x,v1.y,size);
  fill(255,255,0);
  ellipse(v2.x,v2.y,size);
  fill(255,255,255);
  ellipse(v3.x,v3.y,size);
                        
                        
                        
  
}