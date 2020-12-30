var bullet,wall;
var speed,weight,thickness;
var Damage;

function setup() {
  createCanvas(1350,400);
  
  bullet=createSprite(50, 200, 30, 30);
  wall=createSprite(1200,200,thickness,height/2);

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83)

  bullet.velocityX=speed;

}

function draw() {
  background("black");

  if(bullet.x-wall.x<bullet.width/2+wall.width/2 
    && wall.x-bullet.x< bullet.width/2+wall.width/2) {
      bullet.velocityX=0;
    Damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(Damage>10) {
      wall.shapeColor=color("yellow");
    }

    if(Damage<10) {
      wall.shapeColor=color("red");
    }
  }
  
  
  drawSprites();
}