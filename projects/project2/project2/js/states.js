// all the states of the game

// title screen
function title() {
  push();
  image(titleScreenImg, 0, 0, 1000, 500); // image of the title screen

  // looping the tapioca balls to it moves and bounce
  for (let i = 0; i < flyingBobas.length; i++) {
    let boba = flyingBobas[i];
    boba.gravity(gravityForce);
    boba.move();
    boba.bounce();
    boba.display();
  }

  pop();
}

// simulation
function simulation() {
  push();
  image(simulationScreenImg, 0, 0, 1000, 500); // image of the display
  mouseClick();
  pop();
}
