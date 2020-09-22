/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/
let backgroundShade = 0;
let circleX = 250;
let circleY = 250;
let circleSize = 100;

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500,500);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  backgroundShade = backgroundShade + 1;
  background(backgroundShade);
  ellipse(circleX,circleY,circleSize);

}
