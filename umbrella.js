class Umbrella{
    constructor(x,y,width,height){
    var options = {
    isStatic:true,
    
    }
    
    this.body=Matter.Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    this.image=loadImage("walking_1.png")
    World.add(world,this.body)
    
    }
    
    display(){
    var pos=this.body.position
    //var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    
    //rotate(angle)
    //ellipse(0,0,this.r, this.r);
    imageMode(CENTER)
    image(this.image, 0, 0, this.width*2, this.height*2);
    pop()
    }
    
    }