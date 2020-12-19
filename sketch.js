
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var rope1,rope2,rope3,rope4,rope5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	Bob1 = new Bob(250,400,30,30);
	Bob2 = new Bob(310,400,30,30);
	Bob3 = new Bob(370,400,30,30);
	Bob4 = new Bob(430,400,30,30);
	Bob5 = new Bob(490,400,30,30);

	roof = new Roof(380,100,500,40);
	
	rope1 = new Rope(Bob1.body,roof.body,-100,0);
	World.add(world,rope1);
	rope2 = new Rope(Bob2.body,roof.body,-50,0);
	World.add(world,rope2);
	rope3 = new Rope(Bob3.body,roof.body,0,0);
	World.add(world,rope3);
	rope4 = new Rope(Bob4.body,roof.body,50,0);
	World.add(world,rope4);
    rope5 = new Rope(Bob5.body,roof.body,100,0);
    World.add(world,rope5);
	





	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



  

}

function keyPressed(){

if(keyCode === 32){

Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-730,y:0});

}





}


