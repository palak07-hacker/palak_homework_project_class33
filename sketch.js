const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Constraint = Matter.Constraint;

var rand, engine, world;
var maxSnow = 100;
var snows = [];

function setup() {
  engine = Engine.create();
  createCanvas(800,700);
  world = engine.world;
  for(var i=0; i<maxSnow; i++){
 snows.push(new Snow(random(0, 400), random(0, 400)))
  }
}

function draw() {
  Engine.update (engine);
  background(255,255,255); 
  //rand = Math.round(random(1, 4));
  for(var i=0; i<maxSnow; i++){
    snows[i].showSnow();
    snows[i].update();
  }
  drawSprites();
}