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

// bubble tea (toppings to fit cup 2) images -----------
let toppingBobaCup2Img;
let toppingStrawberryCup2Img;

// bubble tea (straw for cup 2)
let strawCup2Img;





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

  // toppings images -------------------------------
  toppingBobaCup2Img = loadImage("assets/images/topping1.png");
  toppingStrawberryCup2Img = loadImage("assets/images/topping2.png");

  // straw images -----------------------------------
  strawCup2Img = loadImage("assets/images/straw.png");

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



  // toppings for the second cup --------------------------------------------------------------
  if(mouseX > 567 && mouseX < 605) {
    if (mouseY > 425 && mouseY < 460) {
      if(toppingStrawberryIsActive === false) {
        displayToppingBobaCup2();
        toppingBobaCup2IsActive = true;
      }
    }
  }


  else if(mouseX > 677 && mouseX < 713) {
    if (mouseY > 425 && mouseY < 463) {
      if(toppingBobaCup2IsActive === false) {
        displayToppingStrawberryCup2();
        toppingStrawberryIsActive = true;
      }
    }
  }

  // straw for second cup
  if(mouseX > 313 && mouseX < 364) {
    if (mouseY > 420 && mouseY < 471) {
      if(cup2TaroIsActive === false && cupChoice === 2) {
        displayCup2MT();
        cup2MilkTeaIsActive = true;
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
