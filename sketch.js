var movingRectangle,fixItRectangle;

function setup() {
  createCanvas(1200,800);
  //createSprite(400, 200, 50, 50);
   movingRectangle=createSprite(400,200,80,30);
  fixItRectangle=createSprite(600,400,60,80);
  movingRectangle.shapeColor="pink";
  fixItRectangle.shapeColor="red";
}

function draw() {
  background(255,255,255);
  movingRectangle.y =mouseY;
  movingRectangle.x =mouseX;
if(movingRectangle.x-fixItRectangle.x<movingRectangle.width/2+fixItRectangle.width/2 && 
  fixItRectangle.x-movingRectangle.x<fixItRectangle.width/2+movingRectangle.width/2 &&
  movingRectangle.y-fixItRectangle.y<movingRectangle.height/2+fixItRectangle.height/2 &&
  fixItRectangle.y-movingRectangle.y<fixItRectangle.height/2+movingRectangle.height/2){
  movingRectangle.shapeColor="green";
   fixItRectangle.shapeColor="green";
   }
   else{
     movingRectangle.shapeColor="orange";
     fixItRectangle.shapeColor="purple";

   }
  
  drawSprites();
}