/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

// setting up circles
let hedgehog1img;
let hedgehog1 = {
  x: 0,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  speed: 5,
  img: hedgehog1img
};

let hedgehog2img;
let hedgehog2 = {
  x: 350,
  y: 250,
  size: 50,
  vx: 0,
  vy: 0,
  tx: 0,
  ty: 10,
  speed: 13,
  img: hedgehog2img
};

let hedgehoghappy;
let hedgehogsad;
let hedgehogtitle;

// load images
function preload() {
  hedgehog1img = loadImage('assets/images/hedgehog1.png');
  hedgehog2img = loadImage('assets/images/hedgehog2.png');
  hedgehoghappy = loadImage('assets/images/hedgehoghappy.png');
  hedgehogsad = loadImage('assets/images/hedgehogsad.png');
  hedgehogtitle = loadImage('assets/images/hedgehogtitle.png');

}


let state = `title`; // title, simulation, love, sadness

// setup()
//
// Description of setup() goes here.
function setup() {
 createCanvas(windowWidth, windowHeight);
 reset();
}

function reset() {
  // position circles seperated from one another
  hedgehog1.x = width / 3;
  hedgehog1.y = height/2;
  hedgehog2.x = (2 * width) / 3;
  hedgehog2.y = height/2;

  // circles moving in random direction
  hedgehog2.vx = random(-hedgehog2.speed,hedgehog2.speed);
  hedgehog2.vy = random(-hedgehog2.speed,hedgehog2.speed);
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
  text(`Catch the love of your life!`, width/2, height/2);
  image(hedgehogtitle, (width/2)-100, (height/2)+100,200,200);
  textSize(50);
  text(`Left click to continue and use the arrow keys to play!`, width/2, height-100);
  pop();
}

function simulation() {

  handleInput();

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
  hedgehog1.x = hedgehog1.x + hedgehog1.vx;
  hedgehog1.y = hedgehog1.y + hedgehog1.vy;


  // perlin noise
  hedgehog2.tx = hedgehog2.tx + 0.025;
  hedgehog2.ty = hedgehog2.ty + 0.025;

  let noiseX = noise(hedgehog2.tx);
  let noiseY = noise(hedgehog2.ty);

  hedgehog2.vx = map(noiseX, 0, 1, -hedgehog2.speed, hedgehog2.speed);
  hedgehog2.vy = map(noiseY, 0, 1, -hedgehog2.speed, hedgehog2.speed);


  hedgehog2.x = hedgehog2.x + hedgehog2.vx;
  hedgehog2.y = hedgehog2.y + hedgehog2.vy;
}

function checkOffScreen() {
  // check if circles are offscreen
  if(hedgehog1.x < 0 || hedgehog1.x > width || hedgehog1.y < 0 || hedgehog1.y > height || hedgehog2.x < 0 || hedgehog2.x > width || hedgehog2.y < 0 || hedgehog2.y > height) {
    state = `sadness`;
  }
}

function checkOverlap() {
  // check if circles are overlapping
  let d = dist(hedgehog1.x,hedgehog1.y,hedgehog2.x,hedgehog2.y);
  if (d < hedgehog1.size/2 + hedgehog2.size/2) {
    state = `love`;
  }
}

function display() {
  // display the circles
  image(hedgehog1img,hedgehog1.x,hedgehog1.y,150,150);
  image(hedgehog2img, hedgehog2.x,hedgehog2.y,150,150);
}

function mousePressed() {
  if(state === `title`) {
    state =  `simulation`;
  }

  // easter egg, another chance at love
  if(state ===`sadness`) {
    state = `simulation`;
    reset();
  }

}


// love state
function love() {
  push();
  textSize(64);
  fill(255,150,150);
  textAlign(CENTER,CENTER);
  text(`LOVE! WOOHOO!!`, width/2, height/2);
  image(hedgehoghappy,width/2,(height/2)-200,150,150);
  pop();
}



// sadness state
function sadness() {
  push();
  textSize(64);
  fill(0,0,255);
  textAlign(CENTER,CENTER);
  text(`You lost the love of your life!`, width/2, height/2);
  image(hedgehogsad,width/2,(height/2)-200,150,150);
  pop();

}


// move the circle with arrow keys
function handleInput() {
  push();
  if (keyIsDown(LEFT_ARROW)) {
    hedgehog1.vx = -hedgehog1.speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    hedgehog1.vx = hedgehog1.speed;
  }
  else {
    hedgehog1.vx = 0;
  }

  if(keyIsDown(UP_ARROW)) {
    hedgehog1.vy = -hedgehog1.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    hedgehog1.vy = hedgehog1.speed;
  } else {
    hedgehog1.vy = 0;
  }
  pop();
}
