let w = 500;
let h = 500;
let size = 200;

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("#sketch");
  colorMode(HSB, 255);
  angleMode(DEGREES);
}

function draw() {
  background(1, 1, 255);

  // store the center of the canvas in a vector
  let pos = createVector(w/2, h/2);
  
  // calculate the angle between the mouse and the position we designated
  let angle = atan2(mouseY-pos.y, mouseX-pos.x);
  
  // how far the circle should MOVE in the calculated direction.
  // note, cos(angle) and sin(angle) with both return a number between -1 and 1.
  // the combined xDirection and yDirection will give us the correct direction for
  // our ellipse to travel
  let xDirection = cos(angle);
  let yDirection = sin(angle);
  
  fill(255,0,1);
  ellipse(w/2, h/2, size);
  
  // calculate a hue value based on the angle (note, the angle calculated by atan2 doesn't go
  // from 0-360; it goes from -180 to 180;
  let hue = map(angle, -180, 180, 0, 255);
  
  fill(hue, 255, 255);
  
  push();
    translate(w/2, h/2);

    // note: just plugging in the x and y directions we calculated above will result in
    // an ellipse that hardly moves. We need to SCALE the direction with some magnitude!
    // ellipse(xDirection, yDirection, 30);

    // uncomment this line down here to see the position of the ellipse scaled correctly
    ellipse(xDirection*size/2, yDirection*size/2, 30);
  pop();
  
}