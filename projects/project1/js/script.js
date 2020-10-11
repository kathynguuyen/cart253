/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let titleScreen;

function preload() {
  titleScreen = loadImage('assets/images/titleScreen.png');
}

let state = `title`; // title, how to play, simulation, win, lose

// setup()
function setup() {

  createCanvas(1000,500);

}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(109,207,246);

  if(state == `title`) {
    title();
  }

}


function title() {
  push();
  image(titleScreen,0,0,1000,500);
  pop();
}
