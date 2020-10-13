/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let titleScreenImg;
let pigImg;
let carrotImg;
let cornImg;
let appleImg;

let pig = {
  x: 450,
  y: 400,
  sizeWidth: 100,
  sizeHeight: 50,
  vx: 0,
  vy: 0,
  speed: 5,
  img: pigImg,
};

let carrot = {
  x: 0,
  y: 100,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  img: carrotImg,
};

let apple = {
  x: 0,
  y: 200,
  sizeWidth: 50,
  sizeHeight: 50,
  vx: 0,
  vy: 0,
  speed: 5,
  img: appleImg,
};

let corn = {
  x: 0,
  y: 150,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  img: cornImg,
};

function preload() {
  titleScreenImg = loadImage("assets/images/titleScreenImg.png");
  pigImg = loadImage("assets/images/pig.png");
  carrotImg = loadImage("assets/images/carrot.png");
  cornImg = loadImage("assets/images/corn.png");
  appleImg = loadImage("assets/images/apple.png");
}

let state = `title`; // title, how to play, simulation, win, lose

// setup()
function setup() {
  createCanvas(1000, 500);

  // apple appears at a random spot in the canvas
  apple.x = random(0, width);
  apple.vy = apple.speed;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(109, 207, 246);

  //states
  if (state === `title`) {
    title();
  }

  if (state === `simulation`) {
    simulation();
  }

  if (state === `howToPlay`) {
    howToPlay();
  }

  if (state === `lose`) {
    lose();
  }
}

function title() {
  push();
  image(titleScreenImg, 0, 0, 1000, 500);
  pop();
}

function lose() {
  background(100, 0, 0);
}

function simulation() {
  background(109, 207, 246);

  checkSize();
  handleInput();
  move();
  display();
}

function howToPlay() {
  background(100, 0, 0);
}

function mousePressed() {
  // press the play button
  if (state === `title`) {
    if (mouseX > 40 && mouseX < 250) {
      if (mouseY > 400 && mouseY < 430) {
        state = `simulation`;
      }
    }
  }

  // press the how to play button
  if (state === `title`) {
    if (mouseX > 700 && mouseX < 880) {
      if (mouseY > 350 && mouseY < 460) {
        state = `howToPlay`;
      }
    }
  }
}

function move() {
  // move the pig
  pig.x = pig.x + pig.vx;
  pig.y = pig.y + pig.vy;

  // move apple
  //apple.x = apple.x + apple.vx;
  //apple.y = apple.y + apple.vy;
}

function display() {
  // display food
  image(cornImg, corn.x, corn.y, corn.sizeWidth, corn.sizeHeight);
  image(carrotImg, carrot.x, carrot.y, carrot.sizeWidth, carrot.sizeHeight);

  // spawns apple everytime and change the size
  //let x = apple.x;
  // (let i = 0; i < 3; i++) {
  image(appleImg, apple.x, apple.y, apple.sizeWidth, apple.sizeHeight);
  //  x = x + 40;
  //  if (apple.y > width) {
  //  apple.y = 0;
  //  apple.sizeWidth = random(50, 150);
  //  apple.sizeHeight = random(20, 100);
  //  apple.x = random(0, height);
  //}
  //}

  // display the pig
  image(pigImg, pig.x, pig.y, pig.sizeWidth, pig.sizeHeight);
}

// move the pig with arrow keys
function handleInput() {
  push();
  if (keyIsDown(LEFT_ARROW)) {
    pig.vx = -pig.speed;
  } else if (keyIsDown(RIGHT_ARROW)) {
    pig.vx = pig.speed;
  } else {
    pig.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    pig.vy = -pig.speed;
  } else if (keyIsDown(DOWN_ARROW)) {
    pig.vy = pig.speed;
  } else {
    pig.vy = 0;
  }

  pop();
}

// check if a fruit is bigger than the pig
function checkSize() {
  let d1 = dist(pig.x, pig.y, apple.x, apple.y);
  // if the fruit is bigger, the player loses
  if (  d1 <  (pig.sizeWidth + pig.sizeHeight) / 10 +    (pig.sizeWidth + pig.sizeHeight) / 10   ){
    if (  (pig.sizeWidth + pig.sizeHeight) / 2 <  (apple.sizeWidth + apple.sizeHeight) / 2  ) {
      state = `lose`;
    }
  }
  // if the fruit is smaller, the pig increases its size
  if ( d1 <(pig.sizeWidth + pig.sizeHeight) / 10 +  (pig.sizeWidth + pig.sizeHeight) / 10  ) {
    if ((pig.sizeWidth + pig.sizeHeight) / 2 > (apple.sizeWidth + apple.sizeHeight) / 2  ) {
      pig.sizeWidth = pig.sizeWidth + 1;
      pig.sizeHeight = pig.sizeHeight + 1;
    }
  }
}
