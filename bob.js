class bob {
    constructor(x, y, height, angle) {
      var options = {
          isStatic:true,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }
      this.body = Bodies.circle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 60;
      Matter.Body.setAngle(this.body, angle);
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("blue");
        strokeWeight(3)
        stroke("black")
        ellipse(200, 200, 50, 50);
        pop();
    }
  };