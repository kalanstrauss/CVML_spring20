let myCapture;

function setup() {
  let canvas = createCanvas(320, 240);
  canvas.parent("sketch");
  myCapture = createCapture(VIDEO);
  myCapture.hide();
  
  fill(255,255,255);
  //noStroke();
  
}

function draw() {
  background(255);
  // fill(random(255),random(255),random(255));
  
  //load pixel data into myCapture object
  myCapture.loadPixels();
  
  const stepSize = round(constrain(mouseX / 8, 6, 32));
  
  for(let y = 0; y < height; y +=stepSize) {
    for(let x = 0; x < width; x +=stepSize) {
      const i = y * width + x;
      const darkness = (255 - myCapture.pixels[i * 8]) / 255;
      const radius = stepSize * darkness;
      //blendMode(MULTIPLY);
      fill(0,255,127,255);
      // push();
      //   translate(width,0);
      //   scale(-1,1);
        rect(x,y,radius,radius);
      //pop();
      
    }
  }
  
  for(let y = 0; y < height; y +=stepSize) {
    for(let x = 0; x < width; x +=stepSize) {
      const i = y * width + x;
      const darkness = (255 - myCapture.pixels[i * 8]) / 127;
      const radius = stepSize * darkness;
      //blendMode(REPLACE);
      fill(0,0,255,127);
      push();
        translate(width,0);
        scale(-1,1);
        rect(x,y,radius,radius);
      pop();
      
      
    }
  }
  
  
  for(let y = 0; y < height; y +=stepSize) {
    for(let x = 0; x < width; x +=stepSize) {
      const i = y * width + x;
      const darkness = (255 - myCapture.pixels[i * 8]) / 127;
      const radius = stepSize * darkness;
      //blendMode();
      fill(255,0,0,85);
      push();
        translate(width * .9 ,1);
        scale(-2,1);
        rect(x,y,radius,radius);
      pop();
    }
  }
  
}