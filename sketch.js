const Bodies= Matter.Bodies;
const World= Matter.World;
const Engine= Matter.Engine;
var man,thunder,manAnimation;
var engine,world;
var thunder, thunderImage;
var drop=[]
var t1,t2,t3,t4;
function preload(){
    manAnimation = loadImage("walking_1.png");
   t1=loadImage("1.png")
   t2=loadImage("2.png")
   t3=loadImage("3.png")
   t4=loadImage("4.png")
}

function setup(){
    engine= Engine.create ();
    world=engine.world;
   createCanvas(600,700)
    
    for (var i =0;i<50;i++){
        drop.push(new Drop())
    }
    umbrella = new Umbrella();
}

function draw(){
    Engine.update(engine)
    background("black");
    umbrella.display();
    image(manAnimation,90,150,450,600)
    for (var i =0;i<50;i++){
    drop[i].display();
    }
    ThunderOn();
  
    
} 
function ThunderOn(){
    if (frameCount%50===0){
        thunder=createSprite(40,40);
       num= Math.round(random(1,4))
       
        switch(num){
            case 1: thunder.addImage(t1)
            break;
            case 2: thunder.addImage(t2)
            break;
            case 3: thunder.addImage(t3)
            break;
            case 4: thunder.addImage(t4)
            break;
            default :
            break
        }
        drawSprites();
    }
}  

