/**************************************************
Template p5 project
Pippin Barr

Here is a description of this template p5 project.
**************************************************/

let covid19 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 10,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let covid19No2 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 20,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let covid19No3 = {
  x: 0,
  y: 250,
  size: 100,
  vx: 0,
  vy: 0,
  speed: 25,
  fill: {
    r: 255,
    g: 0,
    b: 0,
  },
};

let user = {
  x: 250,
  y: 250,
  size: 100,
  fill: 255,
  dragged: false,
};

let hedgehogImage;
function preload() {
  hedgehogImage = loadImage("assets/images/hedgehog.jpg");
}

// setup()
//
// Description of setup() goes here.

function setup() {
  createCanvas(windowWidth, windowHeight);

  covid19.y = random(0, height);
  covid19.vx = covid19.speed;

  covid19No2.y = random(0, height);
  covid19No2.vx = covid19No2.speed;

  covid19No3.y = random(0, height);
  covid19No3.vx = covid19No3.speed;
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // display static
  for (let i = 0; i < 500; i++) {
    let x = random(0, width);
    let y = random(0, height);
    stroke(255);
    point(x, y);
  }

  //covid19 OG
  // movement
  covid19.x = covid19.x + covid19.vx;
  covid19.y = covid19.y + covid19.vy;

  if (covid19.x > width) {
    covid19.x = 0;
    covid19.y = random(0, height);
  }

  //check for catching covid19
  let d = dist(user.x, user.y, covid19.x, covid19.y);
  if (d < covid19.size / 2 + user.size / 2) {
    noLoop();
  }

  // when user gets closer to covid, covid gets bigger
  let distance = dist(user.x, user.y, covid19.x, covid19.y);
  if (distance < covid19.size + user.size) {
    covid19.size = covid19.size + 5;
  } else {
    covid19.size = 100;
  }

  // display covid19
  noStroke();
  let y = covid19.y;
  let numOfCovid = 2;
  for (let i = 0; i < numOfCovid; i++) {
    fill(covid19.fill.r, covid19.fill.g, covid19.fill.b);
    ellipse(covid19.x, y, covid19.size);
    y = y + 40;
  }

  //covid19No2
  // movement
  covid19No2.x = covid19No2.x + covid19No2.vx;
  covid19No2.y = covid19No2.y + covid19No2.vy;

  if (covid19No2.x > width) {
    covid19No2.x = 0;
    covid19No2.y = random(0, height);
  }

  //check for catching covid19
  let d2 = dist(user.x, user.y, covid19No2.x, covid19No2.y);
  if (d2 < covid19No2.size / 2 + user.size / 2) {
    noLoop();
  }

  //display covid19No2
  fill(covid19No2.fill.r, covid19No2.fill.g, covid19No2.fill.b);
  ellipse(covid19No2.x, covid19No2.y, covid19No2.size);

  //covid19No3
  // movement
  covid19No3.x = covid19No3.x + covid19No3.vx;
  covid19No3.y = covid19No3.y + covid19No3.vy;

  if (covid19No3.x > width) {
    covid19No3.x = 0;
    covid19No3.y = random(0, height);
  }

  //check for catching covid19
  let d3 = dist(user.x, user.y, covid19No3.x, covid19No3.y);
  if (d3 < covid19No3.size / 2 + user.size / 2) {
    noLoop();
  }

  //display covid19No3
  fill(covid19No3.fill.r, covid19No3.fill.g, covid19No3.fill.b);
  ellipse(covid19No3.x, covid19No3.y, covid19No3.size);

  // display user
  image(hedgehogImage, user.x, user.y, 100, 100);
}

function mousePressed() {
  // Calculate the distance between the mouse position and the circle position
  let d = dist(mouseX, mouseY, user.x, user.y);
  // If the distance is less that the circle's radius, we know the mouse was
  // inside the circle when pressed
  if (d < user.size) {
    // So we can now drag the circle
    user.dragging = true;
  }
}

function mouseReleased() {
  // If the mouse is released, we should stop dragging the circle
  user.dragging = false;
}

// mouseDragged() is called every frame that the user is moving the mouse
// with a button held down
function mouseDragged() {
  // if the user is dragging the hedgehog
  if (user.dragging) {
    // If it is, we move it to the mouse position
    user.x = mouseX;
    user.y = mouseY;
  }
}
