/**
Kathy Nguyen
Project 2
**/



// state images --------------------------------------------------------
let titleScreenImg;
let simulationScreenImg;

// bubble tea (cups) images --------------------------------------------
let cup1Img;
let cup2Img;


// bubble tea (flavors to fit cup 1) images ---------------------------
let cup1MilkTeaImg;
let cup1TaroImg;

// bubble tea (flavors to fit cup 2) images ---------------------------
let cup2MilkTeaImg;
let cup2TaroImg;




let state = `title`; // title, simulation

// Load images and sounds ----------------------------------------------------------------------------------
function preload() {

  // state images --------------------------------------
  titleScreenImg = loadImage("assets/images/titleScreen.jpg");
  simulationScreenImg = loadImage("assets/images/simulationScreen.jpg");

  // cups images -----------------------------------
  cup1Img = loadImage("assets/images/cup1.png");
  cup2Img = loadImage("assets/images/cup2.png");

  // flavor images --------------------------------
  cup2MilkTeaImg = loadImage("assets/images/cup2MilkTea.png");
  cup2TaroImg = loadImage("assets/images/cup2Taro.png");

}

function setup() {
  createCanvas(1000, 500);

  resetSketch();
  var button = createButton("reset");
  button.mousePressed(resetSketch);
}


// draw function for the states --------------------------------------------------------------------------
function draw() {
  // states
  if (state === `title`) {
    title();
  }

  if (state === `simulation`) {
    simulation();
  }
}


function mousePressed() {

  // cups --------------------------------------------------------
  // display the first cup when we click it
  if (mouseX > 48 && mouseX < 96) {
    if (mouseY > 400 && mouseY < 490)
      if (cup2IsActive === false) {
        displayCup1();
        cup1IsActive = true;
        cupChoice = 1;
      }
  }

  // display the second cup when we click it
  else if (mouseX > 155 && mouseX < 213) {
    if (mouseY > 403 && mouseY < 497) {
      if (cup1IsActive === false) {
        displayCup2();
        cup2IsActive = true;
        cupChoice = 2;
      }
    }
  }


  // flavors ---------------------------------------------------
  if(mouseX > 313 && mouseX < 364) {
    if (mouseY > 420 && mouseY < 471) {
      if(cup2TaroIsActive === false && cupChoice === 2) {
        displayCup2MT();
        cup2MilkTeaIsActive = true;
      }
    }
  }


  else if(mouseX > 406 && mouseX < 452) {
    if (mouseY > 418 && mouseY < 469) {
      if(cup2MilkTeaIsActive === false && cupChoice === 2) {
        displayCup2Taro();
        cup2TaroIsActive = true;
      }
    }
  }





  // toppings --------------------------------------------------------------
  if (mouseX > 451 && mouseX < 468) {
    if (mouseY > 72 && mouseY < 90)
      if (topping2Boolean === false) {
        displayTopping1();
        topping1Boolean = true;
      }
  }


  else if (mouseX > 500 && mouseX < 520) {
    if (mouseY > 50 && mouseY < 70) {
      if (topping1Boolean === false) {
        displayTopping2();
        topping2Boolean = true;
      }
    }
  }



  // button to start the simulation -----------------------------------
  if (mouseX > 496 && mouseX < 564) {
    if (mouseY > 243 && mouseY < 307) {
      state = `simulation`;
    }
  }
}

// temporay coordinates to know the coordinates on where to click
function coordinates() {
  text("X: " + mouseX, 0, height / 4);
  text("Y: " + mouseY, 0, height / 2);
}

function resetSketch() {

  image(simulationScreenImg,0,0,1000,500);

  // reset the variables
  cupChoice = 0;

  cup1IsActive = false;
  cup2IsActive = false;

  cup2MilkTeaIsActive = false;
  cup2TaroIsActive = false;


}
