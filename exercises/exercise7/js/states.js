

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

  // cups
  ellipse(300,80,55,55); // cup 1
  rect(100, 50, 55, 55); // cup 2





  text(`CUPS`,140,20,20,20);

  text(`TOPPINGS`,436,20,20,20);

  text(`STRAWS`,690,20,20,20);

  // toppings
  ellipse(460,80,20,20); // topping 1
  rect(500, 50, 20, 20); // topping 2


    mouseClick();


  //coordinates();


}
