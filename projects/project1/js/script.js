/**************************************************
Project 01 - Hungry Piggy
Kathy Nguyen

Oink effect: https://freesound.org/people/qubodup/sounds/442907/
Wind sound: https://freesound.org/people/klankbeeld/sounds/432780/
Game music: https://freesound.org/people/aptbr/sounds/441301/
**************************************************/

let titleScreenImg;
let howToPlayImg;
let losingScreenImg;
let pigImg;
let carrotImg;
let cornImg;
let appleImg;
let oink;
let appleFalling;
let carrotFalling;
let cornFalling;
let titleMusic;
let gameMusic;
let cloud1Img;
let cloud2Img;
let score = 0;

let pig = {
  x: 450,
  y: 400,
  sizeWidth: 100,
  sizeHeight: 50,
  vx: 0,
  vy: 0,
  speed: 6.5,
  img: pigImg
};

let carrot = {
  x: 0,
  y: 100,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 0,
  speed: 4,
  img: carrotImg,
};

let apple = {
  x: 0,
  y: 200,
  sizeWidth: 50,
  sizeHeight: 50,
  vx: 0,
  vy: 0,
  speed: 3,
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


let cloud1 = {
  x: 0,
  y: 0,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 0,
  speed: 2,
  img: cloud1Img
};

let cloud2 = {
  x: 0,
  y: 0,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 0,
  speed: 5,
  img: cloud2Img
};


let cloud3 = {
  x: 0,
  y: 0,
  sizeWidth: 150,
  sizeHeight: 100,
  vx: 0,
  vy: 0,
  speed: 1,
  img: cloud2Img
};

function preload() {
  titleScreenImg = loadImage("assets/images/titleScreenImg.png");
  howToPlayImg = loadImage("assets/images/howToPlayScreen.png");
  losingScreenImg = loadImage("assets/images/losingScreen.png");
  pigImg = loadImage("assets/images/pig.png");
  carrotImg = loadImage("assets/images/carrot.png");
  cornImg = loadImage("assets/images/corn.png");
  appleImg = loadImage("assets/images/apple.png");
  cloud1Img = loadImage("assets/images/cloud_1.png");
  cloud2Img = loadImage("assets/images/cloud_2.png");


  oink = loadSound("assets/sounds/oink.wav");
  titleMusic = loadSound("assets/sounds/windTitleScreen.wav");
  gameMusic = loadSound("assets/sounds/gameMusic.wav");
}


let state = `title`; // title, how to play, simulation, win, lose

// setup()
function setup() {
  createCanvas(1000, 500);

  // apple appears at a random spot in the canvas
  apple.x = random(0, width);
  apple.vy = apple.speed;

  // corn appears at a random spot in the canvas
  corn.x = random(0, width);
  corn.vy = corn.speed;

  // carrot appears at a random spot in the canvas
  carrot.x = random(0, width);
  carrot.vy = corn.speed;


  // clouds appear at a random spot in the canvas
  cloud1.y = random(0,height);
  cloud1.vx = cloud1.speed;

  cloud2.y = random(0,height);
  cloud2.vx = cloud2.speed;


    cloud3.y = random(0,height);
    cloud3.vx = cloud3.speed;

  titleMusic.setVolume(0.2);
  titleMusic.play();
  gameMusic.setVolume(0.05);



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
  push();
  background(100, 0, 0);
  image(losingScreenImg, 0, 0, 1000, 500);
  pop();
}

function simulation() {
  background(109, 207, 246);
  let s = score;
  text(s, 20,20, 100, 100);
  checkSize();
  handleInput();
  move();
  display();
}

function howToPlay() {
  background(109, 207, 246);
  image(howToPlayImg, 0, 0, 1000, 500);

}

function mousePressed() {
  // press the play button
  if (state === `title`) {
    if (mouseX > 40 && mouseX < 250) {
      if (mouseY > 400 && mouseY < 430) {
        state = `simulation`;
        titleMusic.stop();
        gameMusic.play();
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

  // go back to the title titleScreen
  if (state === `howToPlay`) {
    if (mouseX > 60 && mouseX < 200) {
      if (mouseY > 410 && mouseY < 460) {
        state = `title`;
      }
    }
  }
}

function move() {
  // move the pig
  pig.x = pig.x + pig.vx;
  pig.y = pig.y + pig.vy;

  // move apple
  apple.y = apple.y + apple.vy;

  // move corn
  corn.y = corn.y + corn.vy;

  // move carrot
  carrot.y = carrot.y + carrot.vy;

  // move clouds
  cloud1.x = cloud1.x + cloud1.vx;
  cloud1.y = cloud1.y + cloud1.vy;

  if (cloud1.x > width) {
    cloud1.x = 0;
    cloud1.y = random(0,height);
  }


  cloud2.x = cloud2.x + cloud2.vx;
  cloud2.y = cloud2.y + cloud2.vy;

  if (cloud2.x > width) {
    cloud2.x = 0;
    cloud2.y = random(0,height);
  }

  cloud3.x = cloud3.x + cloud3.vx;
  cloud3.y = cloud3.y + cloud3.vy;

  if (cloud3.x > width) {
    cloud3.x = 0;
    cloud3.y = random(0,height);
  }





}

function display() {


  // spawns apple anywhere and change the size
  if(appleFalling === true) {
    apple.x = random(50, width-50);
    apple.y = -50;
    apple.sizeWidth = random(50, 150);

    appleFalling = false;
  }

  if(apple.y > height) {
    appleFalling = true;
  }



    // spawns corn anywhere and change the size
    if(cornFalling === true) {
      corn.x = random(0, width-50);
      corn.y = -50;
      corn.sizeWidth = random(35, 250);

      cornFalling = false;
    }

    if(corn.y > height) {
      cornFalling = true;
    }


// spawns corn anywhere and change the size
if (carrotFalling === true) {
  carrot.x = random(0, width - 50);
  carrot.y = -50;
  carrot.sizeWidth = random(40, 300);

  carrotFalling = false;
}

if (carrot.y > height) {
  carrotFalling = true;
}


  // dispay clouds
  image(cloud1Img,cloud1.x,cloud1.y,cloud1.sizeWidth,cloud1.sizeHeight);
  image(cloud2Img,cloud2.x,cloud2.y,cloud2.sizeWidth,cloud2.sizeHeight);
  image(cloud2Img,cloud3.x,cloud3.y,cloud3.sizeWidth,cloud3.sizeHeight);



  // display food
  image(cornImg, corn.x, corn.y, corn.sizeWidth, corn.sizeHeight);
  image(carrotImg, carrot.x, carrot.y, carrot.sizeWidth, carrot.sizeHeight);
  image(appleImg, apple.x, apple.y, apple.sizeWidth, apple.sizeHeight);
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

// check if a food is bigger than the pig
function checkSize() {
  // apple check size
  let d1 = dist(pig.x, pig.y, apple.x, apple.y);
  // if the food is bigger, the player loses
  if (  d1 <  (pig.sizeWidth + pig.sizeHeight) / 7 + (apple.sizeWidth + apple.sizeHeight) / 7){
    if (  (pig.sizeWidth + pig.sizeHeight) / 2 <  (apple.sizeWidth + apple.sizeHeight) / 2  ) {
      state = `lose`;
    }
  }
  // if the food is smaller, the pig increases its size
  if ( d1 <(pig.sizeWidth + pig.sizeHeight) / 7 +  (apple.sizeWidth + apple.sizeHeight) / 7  ) {
    if ((pig.sizeWidth + pig.sizeHeight) / 2 > (apple.sizeWidth + apple.sizeHeight) / 2  ) {
      score++;
      pig.sizeWidth = pig.sizeWidth + 5;
      pig.sizeHeight = pig.sizeHeight + 5;
      oink.play();
      appleFalling = true;
    }
  }

  // corn check size
  let d2 = dist(pig.x, pig.y, corn.x, corn.y);
  // if the food is bigger, the player loses
  if (  d2 <  (pig.sizeWidth + pig.sizeHeight) / 9 + (corn.sizeWidth + corn.sizeHeight) / 9){
    if (  (pig.sizeWidth + pig.sizeHeight) / 2 <  (corn.sizeWidth + corn.sizeHeight) / 2  ) {
      state = `lose`;
    }
  }
  // if the food is smaller, the pig increases its size
  if ( d2 <(pig.sizeWidth + pig.sizeHeight) / 9 +  (corn.sizeWidth + corn.sizeHeight) / 9 ) {
    if ((pig.sizeWidth + pig.sizeHeight) / 2 > (corn.sizeWidth + corn.sizeHeight) / 2  ) {
      score++;
      pig.sizeWidth = pig.sizeWidth + 5;
      pig.sizeHeight = pig.sizeHeight + 5;
      oink.play();
      cornFalling = true;
    }
  }

  // carrot check size
  let d3 = dist(pig.x, pig.y, carrot.x, carrot.y);
  // if the food is bigger, the player loses
  if (  d3 <  (pig.sizeWidth + pig.sizeHeight) / 9 + (carrot.sizeWidth + carrot.sizeHeight) / 9){
    if (  (pig.sizeWidth + pig.sizeHeight) / 2 <  (carrot.sizeWidth + carrot.sizeHeight) / 2  ) {
      state = `lose`;
    }
  }
  // if the food is smaller, the pig increases its size
  if ( d3 <(pig.sizeWidth + pig.sizeHeight) / 9 +  (carrot.sizeWidth + carrot.sizeHeight) / 9  ) {
    if ((pig.sizeWidth + pig.sizeHeight) / 2 > (carrot.sizeWidth + carrot.sizeHeight) / 2  ) {
      score++;
      pig.sizeWidth = pig.sizeWidth + 5;
      pig.sizeHeight = pig.sizeHeight + 5;
      oink.play();
      carrotFalling = true;
    }
  }

}
