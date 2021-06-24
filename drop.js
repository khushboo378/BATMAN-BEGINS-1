class Drop{
    constructor(x,y,r){
    var options = {
    restitution:0.4,
    friction:0.01,
    density:0.1

    }
    
    this.body=Bodies.circle(x,y,r,options)
    this.r=r
    this.body.speed=87
    //this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body)
    
    }

    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    
        }
    
    display(){
    var pos=this.body.position
    var angle=this.body.angle
    push()
    translate(pos.x,pos.y)
    rotate(angle)
    noStroke()
    //fill(this.color)
    fill("blue")
    ellipseMode(CENTER)
    ellipse(0,0,this.r, this.r);
    pop()
    }
    
    }