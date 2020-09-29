/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let caterpillar = {
  x: 100,
  y: 250,
  segmentSize: 50
}

let caterpillar2 = {
  x: 100,
  y: 400,
  segmentSize: 50
}


// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(500, 500);
}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(0);
  noStroke();
  fill(100,200,100);

  let x = caterpillar.x;
  let numSegments = 5;
  let segmentsDrawn = 0;

  while(segmentsDrawn < numSegments) {
    ellipse(x,caterpillar.y,caterpillar.segmentSize);
    x = x + 40;
    segmentsDrawn++;
  }

  let x1 = caterpillar2.x;
  for(let i = 0; i <numSegments; i++) {
    ellipse(x1,caterpillar2.y,caterpillar2.segmentSize);
    x1 = x1 + 40;
  }



}
