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

    resetSketch();
    var button = createButton("reset");
    button.mousePressed(resetSketch);

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


if(mouseX > 423 && mouseX < 475) {
  if(mouseY > 319 && mouseY < 365) {
    state = `simulation`;
  }
}


}




function displayCircle() {
  ellipse(200,200,55,55);
}

function displaySquare() {
  rect(200,200,55,55);
}

// temporay coordinates to know the coordinates on where to click
function coordinates() {
  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);
}




function resetSketch() {
  background(255, 209, 220);
  ellipse(300,80,55,55);
  rect(100, 50, 55, 55);
  circleBoolean = false;
  squareBoolean = false;
}
