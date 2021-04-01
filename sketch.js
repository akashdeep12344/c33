const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
//var pig=[];
var engine, world;
////var box1, pig1,pig3;
var backgroundImg,platform;
//var bird, slingshot;


var flag=0;

var gameState = "onSling";
var bg;

//var score = 0;
function preload() {
    //getTime();

var bg=loadImage("images/bg.jpg");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   

    bug1=new buggy(50,170,50,50);
    bug2=new buggy(150,170,50,50);
    bug3=new buggy(250,170,50,50);
    bug4=new buggy(350,170,50,50);
    bug5=new buggy(450,170,50,50);
    bug6=new buggy(550,170,50,50);

    chain1=new chain(bug1.body,bug2.body);
    chain2=new chain(bug2.body,bug3.body);
    chain3=new chain(bug3.body,bug4.body);
    chain4=new chain(bug4.body,bug5.body);
    chain5=new chain(bug5.body,bug6.body);

    rock1=new rock(1100,200,100,100)

}

function draw(){
    
        background(bg);
    
        
    Engine.update(engine);

    bug1.show();
    bug2.show();
    bug3.show();
    bug4.show();
    bug5.show();
    bug6.show();

    chain1.show();
    chain2.show();
    chain3.show();
    chain4.show();
    chain5.show();

    rock1.show();    

    //strokeWeight(4);

    var collision = Matter.SAT.collides(bug6.body,rock1.body);


    if(collision.collided){ 
        flag=1;
     }


      if(flag===1){
      
        textSize(30);

        fill("RED");

        text("crash",500,200);
 

  


      }

  
    
    
}

function keyPressed(){
    if(keyCode===RIGHT_ARROW ){

      Matter.Body.applyForce(bug6.body,{x:bug6.body.position.x,y:bug6.body.position.y},{x:0.5,y:0})  ;
      
    }



}


