const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1,platform2

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16
var box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32

var polygon
var polygonImg
var slingshot

function preload() {

    polygonImg=loadImage("polygon.png")
    
}
function setup(){
    var canvas = createCanvas(1366,600);
    engine = Engine.create();
    world = engine.world;

  
  
    platform1 = new Ground(600, 500,400,20);
    platform2 = new Ground(1100, 400,300,20);

    //first 
    box1=new Box(450,470,50,70)
    box2=new Box(500,470,50,70)
    box3=new Box(550,470,50,70)
    box4=new Box(600,470,50,70)
    box5=new Box(650,470,50,70)
    box6=new Box(700,470,50,70)
    box7=new Box(750,470,50,70)
    
   
    //second
   
    box8=new Box(500,440,50,70)
    box9=new Box(550,430,50,70)
    box10=new Box(600,430,50,70)
    box11=new Box(650,430,50,70)
    box12=new Box(700,440,50,70)
    //third
    box13=new Box(550,390,50,70)
    box14=new Box(600,390,50,70)
    box15=new Box(650,390,50,70)

    //fourth
    box16=new Box(600,360,50,70)

    //second Platform

    //first
    box17=new Box(1000,300,50,70)
    box18=new Box(1050,300,50,70)
    box19=new Box(1100,300,50,70)
    box20=new Box(1150,300,50,70)
    box21=new Box(1200,300,50,70)

    //second

    box22=new Box(1050,200,50,70)
    box23=new Box(1100,200,50,70)
    box24=new Box(1150,200,50,70)

//third

box25=new Box(1100,100,50,70)

    polygon = Bodies.circle(100,200,20);
    World.add(world,polygon);
    
    slingshot=new Slingshot(polygon,{x:300,y:200})

}

function draw(){
    background("black");
    Engine.update(engine);


    
    strokeWeight(4);
    

    textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",300,30);
  textSize(10);
   
   
    platform1.display();
    platform2.display();
        
    
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    
    
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    


    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()

    box22.display()
    box23.display()
    box24.display()
    box25.display()

    imageMode(CENTER)
    image(polygonImg ,polygon.position.x,polygon.position.y,40,40);
  

    slingshot.display()

   
    
  
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
