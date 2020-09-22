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
  fillg: 0,
  fillb: 0
};

let rectangle = {
  x: 300,
  y: 250,
  width: 50,
  height: 100,
  fillr: 0,
  fillg: 0,
  fillb: 0

};

let square = {
  x: 200,
  y: 100,
  size: 60,
  fillr: 0,
  fillg: 0,
  fillb: 0


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
  // circle becomes more blue
  circle.fillb += 1;

  // circle moves and changes size with mouseX
  circle.x += 1;
  circle.x = constrain(circle.x,0,500);
  circle.size = map(mouseX,height,0,50,500);

  ellipse(circle.x,circle.y,circle.size);


  // rectangle
  fill(rectangle.fillr,rectangle.fillb,rectangle.fillg);

  //rectangle randomly changes color
  rectangle.fillr = random(0,255);
  rectangle.fillg = random(0,255);
  rectangle.fillb = random(0,255);


  //rectangle movement
  rectangle.x += random(-10,10);
  rectangle.x = constrain(rectangle.x,50,250);

  rect(rectangle.x,rectangle.y,rectangle.width,rectangle.height);

  // square
  fill(square.fillr,square.fillg,square.fillb);

  //square becomes more green
  square.fillg +=1;

  rect(mouseX,mouseY,square.size);

}
