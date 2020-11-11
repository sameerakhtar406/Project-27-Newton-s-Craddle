
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bobDiameter=40; 
	startBobPositionX=width/2; 
	startBobPositionY=height/4+500;

	//Create the Bodies Here.
	
	roof=new TOP(width/2,height/4,width/5,20);

	bob1=new BOB(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bob2=new BOB(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter); 
	bob3=new BOB(startBobPositionX,startBobPositionY,bobDiameter); 
	bob4=new BOB(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter); 
	bob5=new BOB(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	rope1=new ROPE(bob1.body,roof.body,-bobDiameter*2, 0) 
	rope2=new ROPE(bob2.body,roof.body,-bobDiameter*1, 0) 
	rope3=new ROPE(bob3.body,roof.body,0, 0) 
	rope4=new ROPE(bob4.body,roof.body,bobDiameter*1, 0) 
	rope5=new ROPE(bob5.body,roof.body,bobDiameter*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}
function keyPressed(){
if(keyCode===32){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-730,y:-300})
}
}
