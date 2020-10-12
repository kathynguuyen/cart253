/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let titleScreenImg;
let pigImg;

let pig = {
  x : 450,
  y : 400,
  size : 50,
  vx: 0,
  vy: 0,
  speed: 5,
  img: pigImg
}

function preload() {
  titleScreenImg = loadImage('assets/images/titleScreenImg.png');
  pigImg = loadImage('assets/images/pig.png');
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

  //states
  if(state === `title`) {
    title();
  }

  if(state === `simulation`) {
    simulation();
  }

  if(state === `howToPlay`) {
    howToPlay();
  }

}

function title() {
  push();
  image(titleScreenImg,0,0,1000,500);
  pop();
}

function simulation() {
  background(0);

  handleInput();
  move();
  display();




}


function howToPlay() {
  background(100,0,0);
}




function mousePressed() {

  // press the play button
  if(state === `title`) {
    if(mouseX > 40 && mouseX < 250) {
      if (mouseY > 400 && mouseY < 430) {
        state = `simulation`;
      }
    }
  }

  // press the how to play button
  if(state === `title`) {
    if(mouseX > 700 && mouseX < 880) {
      if (mouseY > 350 && mouseY < 460) {
        state = `howToPlay`;
      }
    }
  }

}


function move() {
  pig.x = pig.x + pig.vx;
  pig.y = pig.y + pig.vy;
}

function display() {
  // display the pig
  image(pigImg,pig.x,pig.y,150,100);

}


// move the pig with arrow keys
function handleInput() {
  push();
  if(keyIsDown(LEFT_ARROW)) {
    pig.vx = -pig.speed;
  }
  else if(keyIsDown(RIGHT_ARROW)) {
    pig.vx = pig.speed;
  }
  else {
    pig.vx = 0;
  }


  if(keyIsDown(UP_ARROW)) {
    pig.vy = -pig.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    pig.vy = pig.speed;
  } else {
    pig.vy = 0;
  }


  pop();
}
