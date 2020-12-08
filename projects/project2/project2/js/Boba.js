class Boba {

  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.vy = 0;
    this.ax = 0;
    this.ay = 0;
    this.maxSpeed = 5;
    this.size = 50;
    this.size2 = 50;
    this.active = true;
  }



  gravity(force) {
    this.ay = this.ay + force;
  }

  move() {
    this.vx = this.vx + this.ax;
    this.vy = this.vy + this.ay;

    this.vx = constrain(this.vx, -this.maxSpeed, this.maxSpeed);
    this.vy = constrain(this.vy, -this.maxSpeed, this.maxSpeed);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;


  }


 bounce() {
   if(this.y + this.size/2 >= height) {
     this.vy = -this.vy;
     this.ay = 0;
   }
 }


  display() {
    push();
    image(bobaImg,this.x,this.y,this.size,this.size2);
    pop();
  }


}
