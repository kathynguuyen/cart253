/**
This is a prototype of my game.
Whenever we click the option selected, the item will appear on the screen.
**/

function setup() {

  createCanvas(1000,500);

}

function draw() {

  background(0);
  ellipse(300,80,55,55);
  rect(100, 50, 55, 55);

  text("X: "+mouseX, 0, height/4);
  text("Y: "+mouseY, 0, height/2);

}

function mouseClicked() {
  if(mouseX > 250 && mouseX < 450) {
    if(mouseY > 70 && mouseY < 85)
    display();
  }
}


function display() {
  ellipse(200,200,55,55);
}
