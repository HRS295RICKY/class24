class bird{
    constructor(x,y){
        var objectoptions = {
            'restitution':0.2,
            'friction':1.0,
            'density':1.0

          }
          this.object = Bodies.rectangle(x,y,15,15,objectoptions);
          this.width = 15;
          this.height = 15;
           World.add(world,this.object);


    }
display(){
    var pos = this.object.position;
    pos.x = mouseX;
    pos.y = mouseY;
    var angle = this.object.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    rectMode(CENTER);  
    fill("red");
    rect(0,0,this.width,this.height);
    pop();

}

}