/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(640,480);

  background(0,0,0);

  noStroke();

  // body
  fill(70, 94, 68);
  ellipse(320,480,300,200);

  // head
  fill(225, 235, 28);
  ellipse(320,240,250,350);
  ellipse(320,60,40,35);

  //eyes
  fill(255,255,255);
  ellipse(260,240,70,25);
  ellipse(260,240,70,25);
  ellipse(390,240,70,25);
  fill(0);
  ellipse(260,240,5,5);
  ellipse(390,240,5,5);

  //nostrils
  fill(0);
  ellipse(290,300,15,15);
  ellipse(350,300,15,15);

  //mouth
  fill(117, 48, 68);
  stroke(0);
  ellipse(320,390,20,20);

}

// draw()
//
// Description of draw() goes here.
function draw() {

}
