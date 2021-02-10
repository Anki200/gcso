 var wall,car;
function setup() {
  createCanvas(800,400);
  wall= createSprite(800, -800, 30, 30);
  wall.shapeColor="green";
  car= createSprite(400, -400, 80, 30);
  car.shapeColor="green";

}

function draw() {
  background("black"); 
  car.y=mouseY;
  car.x=mouseX;
  console.log(movingRect.x-fixedRect.x);

  if (car.x-wall.x<car.width/2+wall.width/2&&
    wall.x-car.x<car.width/2+wall.width/2&&
    car.y-wall.y<car.height/2+wall.height/2&&
    wall.y-car.y<car.height/2+wall.height/2)
    {
    
    car.shapeColor="red";
    wall.shapeColor="red";
  }
  else{
    car.shapeColor="green";
    wall.shapeColor="green";
  }


  drawSprites();
}