
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ball1
var bar1
var string
var ball2
var ball3
var ball4
var string2
var string3
var string4
var string5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bar1 = new Bar(400,200,400,20);



	ball1= new Ball(450,600,50);
	ball3= new Ball(400,600,50);
	ball4= new Ball(350,600,50);
	ball2= new Ball(300,600,50);
	ball5= new Ball(500,600,50);
	string=new Sling(ball2.body,{x:300,y:200});
string2=new Sling(ball4.body,{x:350,y:200})
	string3=new Sling(ball3.body,{x:400,y:200});
	string4=new Sling(ball1.body,{x:450,y:200})
	string5=new Sling(ball5.body,{x:500,y:200})
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");
 //ball1.velocityX=10;
 string2.display();
string3.display();
string4.display();
string5.display();
 bar1.display()
  ball1.display()
  string.display()
ball2.display();
ball5.display();
ball3.display();
ball4.display();
  drawSprites();
 
}



