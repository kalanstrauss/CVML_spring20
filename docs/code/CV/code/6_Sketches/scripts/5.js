let w = 400;
let h = 400;


let particles = [];
const NUM_PARTICLES = 500;

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch");
  background(255);
  colorMode(HSB, 255);
  angleMode(DEGREES);
  
  for( let i = 0; i < NUM_PARTICLES; i++) {
  
  let p = new Particle();
   
  
  p.srcPos = createVector(random(50, 100)+cos(360)*width/4, random(50,100)+sin(360)*height/4);
  
  particles.push(p);
    
  }
}

function draw() {
  
  let lerpValue = map(sin(frameCount), -1, 1, 0,.85);
  
  for( let i = 0; i < NUM_PARTICLES; i++) {
    
    push();
      translate(w/1000,h/1000);
      particles[i].draw(lerpValue);
    pop();
    
  }
  
  

}


// This Particle class is the same as the Particle class from the previous sketch.
class Particle {
  
  constructor() {
    this.srcPos = createVector(random(width), random(height));
    this.dstPos = createVector(random(width), random(height));
    
    this.srcColor = color(255, 0, 0); // these are arbitrary color values; set them to whatever!
    this.dstColor = color(0, 255, 255);
    this.size = 20;
  }
  
  draw(_lerpAmount) {
    
    let lerpedColor = lerpColor(this.srcColor, this.dstColor, _lerpAmount);
    
    let lerpedPosition = p5.Vector.lerp(this.srcPos, this.dstPos, _lerpAmount);
    
    fill(lerpedColor);
    
    ellipse(lerpedPosition.x, lerpedPosition.y, this.size);
    
  }
}