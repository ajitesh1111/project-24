class ComputerArcher {
    constructor(x, y, width, height) {
    const options = {
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.body = Matter.Bodies.rectangle(x, y, width, height, options);
      this.image = loadImage("./assets/playerArcher.png");
      World.add(world, this.body);
      Matter.Body.setAngle(this.body,-PI/2);
    
      if(keyCode === 32){
        arrow.shoot(playerArcher.body.angle);
         }
  }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  