const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body=Matter.Body


var drops=[]
var rain=[]
var ab=[]
var cd=[]
var boy
var rand
//var thunder
var thunder1,thunder2,thunder3,thunder4
var rain
var value = 5

function preload(){
    thuIMG1=loadImage("1.png")
    thuIMG2=loadImage("2.png")
    thuIMG3=loadImage("3.png")
    thuIMG4=loadImage("4.png")

}

function setup(){
engine=Engine.create()
world=engine.world;
createCanvas(600,500)

boy=new Umbrella(300,380,180,150)


}

function draw(){
Engine.update(engine)

//thunder=createSprite(x2,xy)
//thunder.scale=0.3
//thunder.addImage(IMG4)
background("black")

if(frameCount%100===0){
var rand = Math.round(random(1,4));
    switch(rand) {

      case 4: 
    thunder1=createSprite(random(50,450),random(0,100),20,20)
    thunder1.addImage(thuIMG1);
    thunder1.scale=0.3;
    //x2=random(100,500)
    //xy=30
    thunder1.lifetime=50
    break;

      case 3: 
      thunder2=createSprite(random(50,450),random(0,100),20,20)
      thunder2.addImage(thuIMG2);
      thunder2.scale=0.3;
      thunder2.lifetime=50
    break;

      case 2:
        thunder3=createSprite(random(50,450),random(0,100),20,20)
        thunder3.addImage(thuIMG3);
        thunder3.scale=0.3;
        thunder3.lifetime=50;
    //thunder.lifetime=170
    break;

      case 1: 
      thunder4=createSprite(random(50,450),random(0,100),20,20)
      thunder4.addImage(thuIMG4);
      thunder4.scale=0.3;
    thunder4.lifetime=50
    break;
      
      default: break;
    }

}

//1 row 
if(frameCount%0.5===0){
    drops.push(new Drop(random(width/2-300,width/2+300),random(0,100),10))

}   


for(var j=0;j<drops.length;j++){
drops[j].display()    
}
//2 row

if(frameCount%0.5===0){
    rain.push(new Drop(random(width/2-300,width/2+300),random(0,100),10))

}   


for(var a=0;a<drops.length;a++){
rain[a].display()    
}
//3 row
if(frameCount%0.5===0){
    ab.push(new Drop(random(width/2-300,width/2+300),random(0,100),10))

}   


for(var i=0;i<ab.length;i++){
ab[i].display()    
}

//4 row
if(frameCount%0.5===0){
    cd.push(new Drop(random(width/2-300,width/2+300),random(0,100),10))

}   


for(var l=0;l<cd.length;l++){
cd[l].display()    
}


boy.display();


drawSprites()
}


