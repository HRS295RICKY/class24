class ground{
    constructor(x,y,width,height){
        var objectoptions = {
            isStatic:true
          }
          this.object = Bodies.rectangle(x,y,width,height,objectoptions);
          this.width = width;
          this.height = height;
           World.add(world,this.object);


    }
display(){
    var pos = this.object.position;
    rectMode(CENTER);  
    fill("brown");
    rect(pos.x,pos.y,this.width,this.height);

}

}