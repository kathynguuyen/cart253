/**
Kathy Nguyen
Exercise 7
**/


let cup1Boolean= false;
let cup2Boolean = false;

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


  // states
  if(state === `title`) {
    title();
  }


  if(state === `simulation`) {
    simulation();
  }



}

function mousePressed() {

  // display the circle when we click the circle
  if(mouseX > 272 && mouseX < 327) {
    if(mouseY > 50 && mouseY < 108)
    if(cup2Boolean === false) {
      displayCup1();
      cup1Boolean = true;
    }
  }

  //display the square when we click the circle
  else if (mouseX > 100 && mouseX < 156) {
    if(mouseY > 50 && mouseY < 108) {
      if(cup1Boolean === false) {
        displayCup2();
        cup2Boolean = true;

      }
  }


}


// button to start the simulation
if(mouseX > 423 && mouseX < 475) {
  if(mouseY > 319 && mouseY < 365) {
    state = `simulation`;
  }
}


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
  cup1Boolean = false;
  cup2Boolean = false;
}
