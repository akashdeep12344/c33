class buggy{
    constructor(x,y,width,height){
      var options ={ isStatic: true}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
      this.image=loadImage("images/coach.png");
      this.width = width;
      this.height = height;
    }
    show()
    {
        imageMode(CENTER);
       // rect(this.body.position.x, this.body.position.y,this.width, this.height);


      image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);



    }
  
  
  }