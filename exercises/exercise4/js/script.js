"use strict";

// Our fish
let school = [];
let schoolSize = 10;
let counter = 0;

let bigFish = {
  x: 0,
  y: 0,
  size: 100
}



let state = `title`; // two endings

function setup() {
  createCanvas(600, 600);

    for (let i = 0; i < schoolSize; i++) {
      // Create a fish
      let fish = createFish(random(0, width), random(0, height));
      // Add the fish to our array
      school.push(fish);
    }

}

// createFish(x,y)
// Creates a new JavaScript Object describing a fish and returns it
function createFish(x, y) {
  let fish = {
    x: x,
    y: y,
    size: 50,
    vx: 0,
    vy: 0,
    speed: 2,
    reverse: -2,
    r: 0,
    g: 0,
    b: 0,
    eaten: false
  };
  return fish;
}

// draw()
// Moves and displays our fish
function draw() {
  background(0);


  for (let i = 0; i < school.length; i++) {
   moveFish(school[i]);
 }

 // Same again for displaying
 for (let i = 0; i < school.length; i++) {
   displayFish(school[i]);
 }

 // Same again for displaying
 for (let i = 0; i < school.length; i++) {
   checkFish(school[i]);
 }

 moveBigFish();
 displayBigFish();

checkCounter();

 if (state === `endingOne`) {
   endingOne();
 }


}


function endingOne() {
  push();
 textSize(20);
 fill(0,0,255);
 textAlign(CENTER,CENTER);
 text(`WOOHOO, you ate all the fish`, width/2, height/2);
 pop();
}

// moveFish(fish)
// Chooses whether the provided fish changes direction and moves it
function moveFish(fish) {
  // Choose whether to change direction
  let change = random(0, 5);
  if (change < 1) {
    fish.vx = random(-fish.speed, fish.reverse); // added fish reverse so they all go in a corner
    fish.vy = random(-fish.speed, fish.reverse);
  }





  // Move the fish
  fish.x = fish.x + fish.vx;
  fish.y = fish.y + fish.vy;


  // Constrain the fish to the canvas
  fish.x = constrain(fish.x, 0, width);
  fish.y = constrain(fish.y, 0, height);
}

// displayFish(fish)
// Displays the provided fish on the canvas
function displayFish(fish) {
  push();
  fish.r = random(0,200);
  fish.g = random(0,200);
  fish.b = random(0,200);

  if(!fish.eaten) {
    fill(fish.r, fish.g, fish.b);
    noStroke();
    ellipse(fish.x, fish.y, fish.size);
  }

  pop();
}

function moveBigFish() {
  bigFish.x = mouseX;
  bigFish.y = mouseY;
}

function displayBigFish() {
  push();
  fill(300, 300, 300);
  noStroke();
  ellipse(bigFish.x, bigFish.y, bigFish.size);
  pop();
}


function mousePressed() {
  let fish = createFish(mouseX,mouseY); // Create a fish at the mouse position
  school.push(fish); // Add the fish to our array
  // Now the school array has our new fish and it will be moved and drawn
  // with all the others in the for loop!
}


// check if fish got eaten by the big fish
function checkFish(fish) {
  if (!fish.eaten) {
    let d = dist(bigFish.x, bigFish.y, fish.x, fish.y);
    if (d < bigFish.size / 2 + fish.size / 2) {
      counter++;
      fish.eaten = true;
    }
  }
}

function checkCounter() {
  if (counter === 10) {
    noLoop();
    state = `endingOne`;
  }
}
