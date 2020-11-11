/**************************************************
Exercise 6 - Itsy Bitsy Spider
Kathy Nguyen

Just a spider
**************************************************/

"use strict";

let synth;
let note = [`G4`,`C4`,`C4`,`C4`,`C5`,`D5`,`E4`,`E4`];

let currentNote = 0;

let spiderImg;

function preload() {
  spiderImg = loadImage('assets/images/spider.jpg');
}

let spider = {
  x: 100,
  y: 100
}

// setup()
//
// Description of setup() goes here.
function setup() {

  createCanvas(500,500);
  synth = new p5.PolySynth();


}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);


    imageMode(CENTER);
    image(spiderImg,mouseX,mouseY, 100,100);

}
