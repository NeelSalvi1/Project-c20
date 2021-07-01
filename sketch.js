var wall,thickness;
var bullet,speed,weight;



function setup() {
 createCanvas(1600,400); 
speed=random(55,90);
weight=random(400,1500)
 car=createSprite(50,200,50,50);
bullet.velocityX=speed;
wall=createSprite(1200,200,thickness,height/2);

}

function draw() {
  background(255,255,255);  
  thickness=random(22,83);
speed=random(223,321);
weight=random(30,52);
 if(hasCollided(bullet,wall))
{
bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);


if(damage>10){
wall.shapeColor=color(255,0,0);

}
if(damge<10){
wall.shapeColor=color(0,255,0);

}
}
  
  
  drawSprites();
}

function hasCollided(lbullet,lwall)
{
 bulletRightEdge=lbullet.x +lbullet.width;
 wallLeftEdge=lswall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;

}



























