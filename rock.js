class rock{
    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      this.image=loadImage("images/rock.png");
      this.width = width;
      this.height = height;
      World.add(world,this.body);
     
    }
    show()
    {
        imageMode(CENTER);
       // rect(this.body.position.x, this.body.position.y,this.width, this.height);

       
      image(this.image,this.body.position.x, this.body.position.y,this.width, this.height);



    }
  
  
  }