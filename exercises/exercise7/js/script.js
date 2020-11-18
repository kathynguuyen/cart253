/**
Kathy Nguyen
Exercise 7
**/


let circleBoolean= false;
let squareBoolean = false;

let titleScreenImg;


let state = `title`; // title, simulation


// Load images and sounds
function preload() {

  titleScreenImg = loadImage("assets/images/titleScreen.jpg");

}

function setup() {

  createCanvas(1000,500);


}

function draw() {

  // temporary coordinates to determine where to display the shapes
  //coordinates();


  // states
  if(state === `title`) {
    title();
  }


  if(state === `simulation`) {
    simulation();
  }

  //mouseClick();


}

function mousePressed() {

  // display the circle when we click the circle
  if(mouseX > 272 && mouseX < 327) {
    if(mouseY > 50 && mouseY < 108)
    if(squareBoolean === false) {
      displayCircle();
      circleBoolean = true;
    }
  }

  //display the square when we click the circle
  else if (mouseX > 100 && mouseX < 156) {
    if(mouseY > 50 && mouseY < 108) {
      if(circleBoolean === false) {
        displaySquare();
        squareBoolean = true;

      }
  }



}
}




function displayCircle() {
  ellipse(200,200,55,55);
}

function displaySquare() {
  rect(200,200,55,55);
}

function coordinates() {
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
}


function title() {
  push();
  image(titleScreenImg, 0, 0, 1000, 500);
  coordinates();
  pop();
}

function simulation() {
  background(255, 209, 220);
  ellipse(300,80,55,55);
  rect(100, 50, 55, 55);

  resetSketch();
  var button = createButton("reset");
  button.mousePressed(resetSketch);

}


function resetSketch() {
  background(255, 209, 220);
  ellipse(300,80,55,55);
  rect(100, 50, 55, 55);
  circleBoolean = false;
  squareBoolean = false;
}
