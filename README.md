# PROC41-Template

if(frameCount%100===0){
var rand = Math.round(random(1,4));
    switch(rand) {
        
      case 4: 
    thunder.addImage(thuIMG1);
    x2=random(100,500)
    xy=30
    //thunder.lifetime=50
    break;

      case 3: 
    thunder.addImage(thuIMG2);
    x2=random(100,500)
    xy=100
    //thunder.lifetime=100
    break;

      case 2:
    thunder.addImage(thuIMG3);
    x2=random(100,500)
    xy=40
    //thunder.lifetime=170
    break;

      case 1: 
    thunder.addImage(thuIMG4);
    x2=random(100,500)
    xy=20
    //thunder.lifetime=200
    break;
      
      default: break;
    }

}