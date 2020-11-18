

// title screen
function title() {
  push();
  image(titleScreenImg, 0, 0, 1000, 500);
  coordinates();
  pop();
}


// simulation
function simulation() {
  background(255, 209, 220);
  ellipse(300,80,55,55);
  rect(100, 50, 55, 55);

  mouseClick();


}
