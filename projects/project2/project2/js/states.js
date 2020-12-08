

// title screen
function title() {

  push();
  image(titleScreenImg, 0, 0, 1000, 500);

  for(let i = 0; i < flyingBobas.length; i++) {
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

    image(simulationScreenImg,0,0,1000,500);
    checkIfDone();
    mouseClick();

    pop();

  }


  function ending() {

    push();
    background(100,100,1000);


    pop();
  }
