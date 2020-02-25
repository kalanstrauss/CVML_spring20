let w = 500;
let h = 500;
let size = 20;

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch");
  colorMode(HSB,255);
  angleMode(DEGREES);
}

function draw() {
  background(255); 
  
  let c1 = color(255, 255, 0);
  let c2 = color(0, 0, 255);
  
  let v1 = createVector(w/4, 100);
  let v2 = createVector(3*w/4, 100);
  
  v1.y = map(sin(frameCount/50), -1, 1, 100, 300);
  v2.y = map(cos(frameCount/50), -1,1, 100, 300);
  //let v2 = createVector(w/4,h/4);
  
  let lerpValue = map(sin(frameCount), -1, 1, 0, 1);
  
  v1.y = map(sin(frameCount*2), -1,1,100,300);
  v2.y = map(sin(frameCount/4), -1,1,100,300);
  
  let v3 = p5.Vector.lerp(v1,v2,lerpValue);
  
  let lerpedColor = lerpColor(c1,c2,lerpValue);
 
  line(v1.x, v1.y, v2.x, v2.y);
  
  fill(c1);
  ellipse(v1.x, v1.y, size);
  fill(c2);
  ellipse(v2.x, v2.y, size);
  
  fill(lerpedColor);
  
  ellipse(v3.x, v3.y, size);
                        
  
}