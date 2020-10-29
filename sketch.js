const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1,box2,box3,box4,box5;
var ground1;
var pig1,pig2;
var log1,log2,log3,log4;
var bird1;

function setup() {
  createCanvas(400,400);
 
  engine = Engine.create();
 world = engine.world;
 box1 = new box(200,300,50,50);
 box2 = new box(300,300,50,50);
 box3 = new box(200,200,50,50);
 box4 = new box(300,200,50,50);
 box5 = new box(250,100,50,50);
 ground1 = new ground(200,350,400,20);
 pig1 = new pig(250,300);
 pig2 = new pig(250,200);
 log1 = new log(250,250,200,PI/2);
 log2 = new log(250,150,200,PI/2);
 log3 = new log(200,70,100,PI/3);
 log4 =new log(300,70,100,-PI/4);
 bird1 = new bird(50,50);

}


function draw() {
  background("lightblue");

  Engine.update(engine);
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ground1.display();
  pig1.display();
  pig2.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  bird1.display();

}