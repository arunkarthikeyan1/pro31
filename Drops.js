class Drops {
  constructor(x, y, radius1,radius2) {
    var options = {
        'isStatic':false,
        'restitution':1.0,
        'friction':0.1,
        'density':0.8
    }
    this.x=x;
    this.y=y;
    this.radius1=radius1;
    this.radius2=radius2;
    this.body=Bodies.circle(this.x,this.y,(this.radius1)/2,options)
    World.add(world,this.body);
   //}
 //display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipseMode(CENTER);
    strokeWeight(5);
    stroke("blue");
    //fill(255,204,51);
    ellipse(0, 0,this.radius1,this.radius2);  
    pop();
  }
}
