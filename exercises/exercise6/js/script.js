/**************************************************
Exercise 6 - Itsy Bitsy Spider
Kathy Nguyen

Just a spider
Click the spider to play itsy bitsy spider!
**************************************************/

"use strict";

let synth;
let notes = [`G4`,`C4`,`C4`,`C4`,`D4`,`E4`,`E4`,`E4`,`D4`,`C4`,`D4`,`E4`,`C4`,`E4`,`E4`,`F4`,`G4`,`G4`,`F4`,`E4`,`F4`,`G4`,`E4`,`C4`,`C4`,`D4`,`E4`,`E4`,`G4`,`C4`,`C4`,`C4`,`D4`,`E4`,`E4`];
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

  userStartAudio();
}

// draw()
//
// Description of draw() goes here.
function draw() {
  background(0);

  // instructions
  push();
  fill(190);
  text(`left click and dance to itsy bitsy spdier!`,250,250);
  pop();

  // display spider

    imageMode(CENTER);
    image(spiderImg,mouseX,mouseY, 100,100);

}


// once the mouse is pressed, the music plays
function mousePressed() {
  setInterval(playSong,500);
}


// play the song depending on the sequence of the array
function playSong() {
  let note = notes[currentNote];
  synth.play(note,1,0,1);
  currentNote = currentNote + 1;
  if (currentNote === notes.length) {
    currentNote = 0;
  }
}
