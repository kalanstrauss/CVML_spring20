let w = 500;
let h = 500;
let p;

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch");
  angleMode(DEGREES);
  
  p = new Particle();
}

function draw() {
  background(255, 255, 255);
  
  // draw the Particle p created above lerping between its src and dst locations.
  
 let lerpValue = map(sin(frameCount), -1, 1, 0, 1, true);
  
  p.draw(lerpValue);
  
}


class Particle {
  
  constructor() {
    this.srcPos = createVector(random(width), random(height));
    this.dstPos = createVector(random(width), random(height));
    
    this.srcColor = color(255, 0, 255);
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
