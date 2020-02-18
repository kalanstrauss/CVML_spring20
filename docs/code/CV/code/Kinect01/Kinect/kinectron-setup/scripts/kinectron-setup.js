let w = 1280;
let h = 720;
let x =1;
let y =1;
let easing = 0.05;
let size = 40;

let kinectron;

function setup() {
    let canvas = createCanvas(w,h);
    canvas.parent("#sketch");
    background(0);
    angleMode(DEGREES);

    kinectron = new Kinectron("10.75.24.245")

    kinectron.makeConnection();

    kinectron.startTrackedBodies(drawBody);

}

function draw() {

    let targetX = mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = mouseY;
    let dy = targetY -y;
    y += dy * easing;

    noStroke();
    fill(random(255));
    ellipse(x,y,50,50);
   
}

function drawBody(body){
    //background(220);
    for(let i = 0; i < body.joints.length; i++) {

        stroke(255);
        fill(255,0,0);
        ellipse(body.joints[i].depthX*width,body.joints[i].depthY*height,20,20);

        
    }

}