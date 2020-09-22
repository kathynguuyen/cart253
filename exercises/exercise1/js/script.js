/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// background
let bg = {
  r:0,
  g:0,
  b:0

};

// shapes
let circle = {
  x:50,
  y:250,
  size: 100,
  fillr: 0,
  fillg: 162,
  fillb: 255
};

let rectangle = {
  x: 300,
  y: 250,
  width: 50,
  height: 100,
  fillr: 201,
  fillg: 36,
  fillb: 36

};

let square = {
  x: 200,
  y: 100,
  size: 60,
  fillr: 0,
  fillg: 163,
  fillb: 52


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



  // circle
  fill(circle.fillr,circle.fillg,circle.fillb);
  ellipse(circle.x,circle.y,circle.size);


  // rectangle
  fill(rectangle.fillr,rectangle.fillb,rectangle.fillg);
  rect(rectangle.x,rectangle.y,rectangle.width,rectangle.height);

  // square
  fill(square.fillr,square.fillg,square.fillb);
  rect(square.x,square.y,square.size);

}
