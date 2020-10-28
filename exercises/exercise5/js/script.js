

// setup()
//
// Description of setup() goes here.
function setup() {
  createCanvas(windowWidth,windowHeight);

  paddle = new Paddle(300,20);
}

// draw()
//
// Description of draw() goes here.
function draw() {

  background(0);

  paddle.move();
  paddle.display();

}
