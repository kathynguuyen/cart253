/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setting up circles
let hedgehog1;
let circle1 = {
  x: 0,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 5,
  img: hedgehog1
};

let hedgehog2;
let circle2 = {
  x: 350,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 5,
  img: hedgehog2
};

let hedgehoghappy;
let hedgehogsad;

// load images
function preload() {
  hedgehog1 = loadImage('assets/images/hedgehog1.png');
  hedgehog2 = loadImage('assets/images/hedgehog2.png');
  hedgehoghappy = loadImage('assets/images/hedgehoghappy.png');
  hedgehogsad = loadImage('assets/images/hedgehogsad.png');

}


let state = `title`; // title, simulation, love, sadness

// setup()
//
// Description of setup() goes here.
function setup() {
 createCanvas(windowWidth, windowHeight);
  // position circles seperated from one another
  circle1.x = width / 3;
  circle2.x = (2 * width) / 3;

  // circles moving in random direction
  circle1.vx = random(-circle1.speed,circle1.speed);
  circle1.vy = random(-circle1.speed,circle1.speed);
  circle2.vx = random(-circle2.speed,circle2.speed);
  circle2.vy = random(-circle2.speed,circle2.speed);
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `love`) {
    love();
  }
  else if (state === `sadness`) {
    sadness();
  }



}

function title() {
  push();
  textSize(64);
  fill(200,100,100);
  textAlign(CENTER,CENTER);
  text(`LOVE?`, windowWidth/2, windowHeight/2);
  pop();
}

function simulation() {

  // move the circles
  move();


  // check if circes have gone offscreen
  checkOffScreen();

  // check if circles are overlapping
  checkOverlap();

  // display the circles
  display();

}


function move() {
  // move the circles
  circle1.x = circle1.x + circle1.vx;
  circle1.y = circle1.y + circle1.vy;

  circle2.x = circle2.x + circle2.vx;
  circle2.y = circle2.y + circle2.vy;
}

function checkOffScreen() {
  // check if circles are offscreen
  if(circle1.x < 0 || circle1.x > windowWidth || circle1.y < 0 || circle1.y > windowHeight || circle2.x < 0 || circle2.x > windowWidth || circle2.y < 0 || circle2.y > windowHeight) {
    state = `sadness`;
  }
}

function checkOverlap() {
  // check if circles are overlapping
  let d = dist(circle1.x,circle1.y,circle2.x,circle2.y);
  if (d < circle1.size/2 + circle2.size/2) {
    state = `love`;
  }
}

function display() {
  // display the circles
  image(hedgehog1,circle1.x,circle1.y,150,150);
  image(hedgehog2, circle2.x,circle2.y,150,150);
}

function mousePressed() {
  if(state == `title`) {
    state =  `simulation`;
  }

}

function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`LOVE!`, windowWidth/2, windowHeight/2);
  image(hedgehoghappy,windowWidth/2,(windowHeight/2)-200,150,150);
  pop();
}

function sadness() {
  push();
  textSize(64);
  fill(0,0,255);
  textAlign(CENTER,CENTER);
  text(`SADNESS!`, windowWidth/2, windowHeight/2);
  image(hedgehogsad,windowWidth/2,(windowHeight/2)-200,150,150);
  pop();
}
