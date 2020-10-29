class box{
    constructor(x,y,width,height){
        var objectoptions = {
            'restitution':0.2,
            'friction':1.0,
            'density':1.0

          }
          this.object = Bodies.rectangle(x,y,width,height,objectoptions);
          this.width = width;
          this.height = height;
           World.add(world,this.object);


    }
display(){
    var pos = this.object.position;
    var angle = this.object.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    
    rectMode(CENTER);  
    fill("blue");
    rect(0,0,this.width,this.height);
    pop();

}

}