class Man {
      
    constructor(x,y,radius){
         var options = {
              isStatic: true,
              restitution: 0.5
         };
         
        // this.radius = radius;

         this.image  = loadImage("proc41images/images/Walking Frame/walking_1.png","proc41images/images/Walking Frame/walking_2.png","proc41images/images/Walking Frame/walking_3.png","proc41images/images/Walking Frame/walking_4.png","proc41images/images/Walking Frame/walking_5.png","proc41images/images/Walking Frame/walking_6.png","proc41images/images/Walking Frame/walking_7.png","proc41images/images/Walking Frame/walking_8.png");
       /* this.image = loadImage("proc41images/images/Walking Frame/walking_1.png");
        this.image = loadImage("proc41images/images/Walking Frame/walking_2.png");
        this.image = loadImage("proc41images/images/Walking Frame/walking_3.png");
        this.image = loadImage("proc41images/images/Walking Frame/walking_4.png");*/
         this.body = Matter.Bodies.circle(x,y, radius, options);
         
         World.add(world, this.body);
    }
    display(){
    
         
          push();
          translate(this.body.position.x, this.body.position.y);
          imageMode(CENTER);
          image(this.image, 0, 0, this.radius);
          image.scale=0.5;
          pop();
        
    }
}