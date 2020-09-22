/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let bg = {
  r:0,
  g:0,
  b:0

};

let circle1 = {
  x:0,
  y:250,
  size: 100,
  fill: 255,
  alpha: 200
};

let circle2 = {
  x: 500,
  y: 250,
  size: 50,
  fill: 255,
  alpha: 200

};

// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(500,500);
  noStroke();

}

// draw()
//
// Description of draw() goes here.
function draw() {

  // background
  background(bg.r,bg.g,bg.b);
  bg.r += 1;

  // left circle
  fill(circle1.fill,circle1.alpha);
  circle1.x += 1;
  circle1.x = constrain(circle1.x,0,250);
  circle1.size = circle1.size + 1;
  circle1.size = constrain(circle1.size,0,500);
  ellipse(circle1.x,circle1.y,circle1.size);

  // right circle
  fill(circle2.fill,circle2.alpha);
  circle2.x -= 1;
  circle2.x = constrain(circle2.x,250,500);
  circle2.size = circle1.size * 0.75;
  ellipse(circle2.x,circle2.y,circle2.size);

}
