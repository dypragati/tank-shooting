const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;

function setup(){

var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    box1 = new Tanker(400, 300, 100, 50)

}
function draw(){
    
    Engine.update(engine);
    ground.display();
}