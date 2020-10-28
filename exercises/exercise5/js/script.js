"use strict";

let clownImg;

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

  for(let i = 0; i < balls.length; i++) {
    let ball = balls[i];
    if (ball.active) {

      ball.gravity(gravityForce);
      ball.move();
      ball.bounce(paddle);
      ball.display();

    }

    for(let i = 0; i < clowns.length; i++) {
      let clown = clowns[i];
      if (clown.active) {

        clown.gravity(gravityForce);
        clown.move();
        clown.bounce(paddle);
        clown.display();

      }

  }

}

}


function mousePressed() {
  let ball = new Ball(mouseX,mouseY);
  balls.push(ball);
}
