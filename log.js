class log{
    constructor(x,y,height,angle){
        var objectoptions = {
            'restitution':0.2,
            'friction':1.0,
            'density':1.0

          }
          this.object = Bodies.rectangle(x,y,20,height,objectoptions);
          this.width = 20;
          this.height = height;
          Matter.Body.setAngle(this.object,angle);
           World.add(world,this.object);


    }
display(){
    var pos = this.object.position;
    var angle = this.object.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    rectMode(CENTER);  
    fill("yellow");
    rect(0,0,this.width,this.height);
    pop();

}

}