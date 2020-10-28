"use strict";

let clownImg;
let score = 0;

let state = `title`; // two endings

function preload() {

  clownImg = loadImage('assets/images/clown.png');

}


 let gravityForce = 0.0025;

 let paddle;

 let balls = [];
 let numBalls = 3;

 let clowns = [];
 let numClowns = 3;

function setup() {
  createCanvas(windowWidth,windowHeight);

  paddle = new Paddle(300,20);

  for (let i = 0; i < numBalls; i++) {
    let x = random(0,width);
    let y = random(-400,-100);
    let ball = new Ball(x,y);
    balls.push(ball);
  }


    for (let i = 0; i < numClowns; i++) {
      let x = random(0,width);
      let y = random(-400,-100);
      let clown = new Clown(x,y);
      clowns.push(clown);
    }

}


function draw() {

  background(0);

  paddle.move();
  paddle.display();


  // spawns balls
  for(let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {

      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();

    }
  }

    // spawns clowns
    for(let i = 0; i < clowns.length; i++) {
      let clown = clowns[i];
      if (clown.active) {

        clown.gravity(gravityForce);
        clown.move();
        clown.bounce(paddle);
        clown.display();

      }

  }



  if (state === `endingOne`) {
  endingOne();
  }

  checkIfTouchedClown();





}

// add another ball everytime the mouse is pressed
function mousePressed() {
  let ball = new Ball(mouseX,mouseY);
  balls.push(ball);
}

function endingOne() {
  push();
 textSize(20);
 fill(0,0,300);
 textAlign(CENTER,CENTER);
 text(`Yes!, you touched two clowns!!`, width/2, height/2);
 pop();
}


function checkIfTouchedClown() {
  if (score === 2) {
    noLoop();
    state = `endingOne`;
  }
}
