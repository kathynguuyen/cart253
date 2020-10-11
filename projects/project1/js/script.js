/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let titleScreenImg;


function preload() {
  titleScreenImg = loadImage('assets/images/titleScreenImg.png');

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

  if(state === `title`) {
    title();
  }

  if(state === `simulation`) {
    simulation();
  }

}

function simulation() {
  background(0);
}


function title() {
  push();
  image(titleScreenImg,0,0,1000,500);
  pop();
}

function mousePressed() {
  if(state === `title`) {
    if(mouseX > 40 && mouseX < 250) {
      if (mouseY > 400 && mouseY < 430) {
        state = `simulation`;
      }
    }
  }
}
