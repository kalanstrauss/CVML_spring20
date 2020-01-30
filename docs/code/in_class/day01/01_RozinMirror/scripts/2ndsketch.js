let myCapture;

function setup() {
  createCanvas(320, 240);
  myCapture = createCapture(VIDEO);
  myCapture.hide();
  
  fill(255,255,255);
  //noStroke();
  
}

function draw() {
  background(255,255,255);
  // fill(random(255),random(255),random(255));
  
  //load pixel data into myCapture object
  myCapture.loadPixels();
  
  const stepSize = round(constrain(mouseX / 8, 12, 32));
  
  // for(let y = 0; y < height; y +=stepSize) {
  //   for(let x = 0; x < width; x +=stepSize) {
  //     const i = y * width + x;
  //     const darkness = (255 - myCapture.pixels[i * 8]) / 255;
  //     const radius = stepSize * darkness;
  //     //blendMode(MULTIPLY);
  //     fill(0,255,0,127);
  //     noStroke();
  //     // push();
  //     //   translate(width,0);
  //     //   scale(-1,1);
  //       circle(x,y,radius,radius);
  //     //pop();
      
  //   }
  // }
  
 for(let y = 0; y < height; y +=stepSize) {
    for(let x = 0; x < width; x +=stepSize) {
      const i = y * width + x;
      const darkness = (255 - myCapture.pixels[i * 8]) / 255;
      const radius = stepSize * darkness;
      //blendMode(MULTIPLY);
      fill(255,0,255,255);
      noStroke();
      circle(x,y,radius,radius);
      push(); // Start a new drawing state
      strokeWeight(10);
      fill(255, 255, 0, 255);
      translate(5, 0);
      blendMode(MULTIPLY);
      circle(x, y, radius, radius); // Middle circle
      pop();
      push();// Restore original state
      fill(0,255,255,255);
      translate(-5,0);
      blendMode(MULTIPLY);
      circle(x, y, radius, radius); // Right circle
      pop();
      
    }
 }
  
}