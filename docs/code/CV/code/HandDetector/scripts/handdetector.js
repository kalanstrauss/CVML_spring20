let capture;
let classifier;
let imageModelURL = "https://teachablemachine.withgoogle.com/models/JooaGpMS/model.json";
let label;
let size;


let w = 640;
let h = 480;

function preload() {
  classifier = ml5.imageClassifier(imageModelURL);
}

function setup() {
  let canvas = createCanvas(w, h);
  canvas.parent("handdetector");
  
  let constraints = {audio:false,video:{width:{min:320,ideal:w,max:1920},height:{min:240,ideal:h,max:1080},frameRate: {min: 1.0, max: 60.0}}};
  frameRate(30);
  
  capture = createCapture(constraints);
  capture.hide();
  
  classifyVideo();
  
  
}

function draw() {
  background(220);
  
  image(capture, 0, 0);
  // textSize(40);
  // fill(255,255,255);
  // text(label,100,100);
  if(label == "Right hand") {
  fill(200,200,0);
  rect(0, 0, w, h);
  textSize(40);
  fill(255,255,255);
  text(label,w/2,h/2);
  }
  else if(label == "Left hand") {
  fill(0,200,200);
  rect(0, 0, w, h);
  textSize(40);
  fill(255,255,255);
  text(label,w/4,h/2);
  }
  
}

function classifyVideo() {
  classifier.classify(capture, gotResults);
}

function gotResults(error, results) {
  if(error) {
    console.error(error)
    return;
  }
  
  label = results[0].label;
  
  size = map(results[0].confidence, 0, 1, 0, 300);
  
  // fill(200,200,0);
  // rect(0, height/2, size, 50);
  
  console.log(results);
  
  classifyVideo();
}