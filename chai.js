class chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
       // this.chain = loadImage('sprites/sling1.png');
       
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   show(){

       // image(this.sling1,200,20);
     
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;
           
                strokeWeight(7);
                line(pointA.x , pointA.y, pointB.x , pointB.y);
               
    }
    
}