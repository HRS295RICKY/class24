class pig{
    constructor(x,y){
        var objectoptions = {
            'restitution':0.2,
            'friction':1.0,
            'density':1.0

          }
          this.object = Bodies.rectangle(x,y,30,30,objectoptions);
          this.width = 30;
          this.height = 30;
           World.add(world,this.object);


    }
display(){
    var pos = this.object.position;
    var angle = this.object.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    rectMode(CENTER);  
    fill("green");
    rect(0,0,this.width,this.height);
    pop();

}

}