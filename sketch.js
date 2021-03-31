const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, paper, bottom, left, right;
function setup(){
	var canvas = createCanvas (1600, 700);
	engine = Engine.create();
	world = engine.world;
	ground = new Ground();
	paper = new Paper(200, 200, 5);
	bottom = new Sides (1200, 580, 200, 20);
	left = new Sides(1086, 516, 20, 150);
	right = new Sides(1314, 516, 20, 150);
	Engine.run(engine);
}
function draw(){
	background(0);
	ground.display();
	paper.display();
	bottom.display();
	left.display();
    right.display();	
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-5});
	}
}