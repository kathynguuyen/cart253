/**
Kathy Nguyen
Project 2

Used code from my exercise 5 to make the raining bubbles. 
**/

"use strict";

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

// bubble tea (toppings to fit cup 1) images -----------
let toppingBobaCup1Img;
let toppingStrawberryCup1Img;


// bubble tea (toppings to fit cup 2) images -----------
let toppingBobaCup2Img;
let toppingStrawberryCup2Img;

// bubble tea (straw for cup 2)
let strawCup1Img;
let strawCup2Img;

// raining boba
let bobaImg;

let flyingBobas[];
let gravityForce = 0.1;
let numBobas = 50;





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
  cup1MilkTeaImg = loadImage("assets/images/cup1MilkTea.png");
  cup1TaroImg = loadImage("assets/images/cup1Taro.png");
  cup2MilkTeaImg = loadImage("assets/images/cup2MilkTea.png");
  cup2TaroImg = loadImage("assets/images/cup2Taro.png");

  // toppings images -------------------------------
  toppingBobaCup1Img = loadImage("assets/images/topping1Cup1.png");
  toppingStrawberryCup1Img = loadImage("assets/images/topping2Cup1.png");
  toppingBobaCup2Img = loadImage("assets/images/topping1.png");
  toppingStrawberryCup2Img = loadImage("assets/images/topping2.png");

  // straw images -----------------------------------
  strawCup1Img = loadImage("assets/images/strawCup1.png");
  strawCup2Img = loadImage("assets/images/straw.png");

  // raining boba image
  bobaImg = loadImage("assets/images/boba.png");

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


  // flavors for the first cup ---------------------------------------------------
  if(mouseX > 313 && mouseX < 364) {
    if (mouseY > 420 && mouseY < 471) {
      if(cup1TaroIsActive === false && cupChoice === 1) {
        displayCup1MT();
        cup1MilkTeaIsActive = true;
      }
    }
  }


  else if(mouseX > 406 && mouseX < 452) {
    if (mouseY > 418 && mouseY < 469) {
      if(cup1MilkTeaIsActive === false && cupChoice === 1) {
        displayCup1Taro();
        cup1TaroIsActive = true;
      }
    }
  }

  // flavors for the second cup ---------------------------------------------------
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



  // toppings for the first cup --------------------------------------------------------------
  if(mouseX > 567 && mouseX < 605) {
    if (mouseY > 425 && mouseY < 460) {
      if(toppingStrawberryCup1IsActive === false && cupChoice === 1) {
        displayToppingBobaCup1();
        toppingBobaCup1IsActive = true;
      }
    }
  }


  else if(mouseX > 677 && mouseX < 713) {
    if (mouseY > 425 && mouseY < 463) {
      if(toppingBobaCup1IsActive === false && cupChoice === 1) {
        displayToppingStrawberryCup1();
        toppingStrawberryCup1IsActive = true;
      }
    }
  }



  // toppings for the second cup --------------------------------------------------------------
  if(mouseX > 567 && mouseX < 605) {
    if (mouseY > 425 && mouseY < 460) {
      if(toppingStrawberryCup2IsActive === false && cupChoice === 2) {
        displayToppingBobaCup2();
        toppingBobaCup2IsActive = true;
      }
    }
  }


  else if(mouseX > 677 && mouseX < 713) {
    if (mouseY > 425 && mouseY < 463) {
      if(toppingBobaCup2IsActive === false && cupChoice === 2) {
        displayToppingStrawberryCup2();
        toppingStrawberryCup2IsActive = true;
      }
    }
  }


  // straw for first cup
  if(mouseX > 881 && mouseX < 903) {
    if (mouseY > 400 && mouseY < 479) {
      if(cupChoice === 1)
        displayStrawCup1();
        strawCup1IsActive = true;

    }
  }


  // straw for second cup
  if(mouseX > 881 && mouseX < 903) {
    if (mouseY > 400 && mouseY < 479) {
      if(cupChoice === 2)
        displayStrawCup2();
        strawCup2IsActive = true;

    }
  }




  // button to start the simulation -----------------------------------
  if (mouseX > 496 && mouseX < 564) {
    if (mouseY > 243 && mouseY < 307) {
      state = `simulation`;
    }
  }
}



// function to reset whenever the user makes a mistake creating their bubble tea
function resetSketch() {

  image(simulationScreenImg,0,0,1000,500);

  // reset the variables
  cupChoice = 0;

  cup1IsActive = false;
  cup2IsActive = false;

  cup1MilkTeaIsActive = false;
  cup1TaroIsActive = false;
  cup2MilkTeaIsActive = false;
  cup2TaroIsActive = false;


  toppingBobaCup1IsActive = false;
  toppingStrawberryCup1IsActive = false;
  toppingBobaCup2IsActive = false;
  toppingStrawberryCup2IsActive = false;

  strawCup1IsActive = false;
  strawCup2IsActive = false;


}
