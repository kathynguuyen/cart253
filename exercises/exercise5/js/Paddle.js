class Paddle {

  constructor(w,h) {

    this.width = w;
    this.height = h;
    this.x = 0;
    this.y = height - this.height/2;

  }


  // make the paddle move with the mouse
  move() {
    this.x = mouseX;
  }


  // display the paddle
  display() {
    push();
    fill(255);
    noStroke();
    rectMode(CENTER);
    rect(this.x,this.y,this.width,this.height);
    pop();
  }


}
