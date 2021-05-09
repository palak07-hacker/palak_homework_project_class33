class Snow{
    constructer(x, y){
  var options = {
    density:0.3,
    friction:0.1,
    isStatic:false,
    restitution:0.1
  }
 this.image = loadImage("snow3.jpg");
  this.snow = Bodies.rectangle(x, y, width, height, options);
  World.add(world, this.snow);
}

update(){
   if(this.snow.position.y>height){
 Matter.Body.setPosition(this.snow, {x:random(0, 400), y:random(0, 400)})
}
}

showSnow(){
var pos = this.snow.position;
noStroke();
rectMode(CENTER);
image(this.image, pos.x, pos.y, this.width, this.height);
}
}
