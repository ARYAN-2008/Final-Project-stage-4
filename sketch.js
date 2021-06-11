var background, backgroundImg;
var shooter, shooterImg; 
var satellite, satelliteImg, satelliteGroup;
var comets, comet1, comet2, comet3, comet4, cometsGroup;
var bullets, bulletsImg, bulletsGroup;
var score;


function preload(){
backgroundImg = loadImage("background 1.jpg");
shooterImg = loadImage("shooter image.png");
comet1 = loadImage("comet 1.png");
comet2 = loadImage("comet 2.png");
comet3 = loadImage("comets 3.png");
comet4 = loadImage("comets 4.png");
bulletsImg = loadImage("bulletnew 2.png");
satelliteImg = loadImage("sattelite.png");
  
}



function setup() {
  createCanvas(700, 600);

  shooter = createSprite(300,560,20,50);
  shooter.addImage(shooterImg); 
  shooter.scale = 0.3;

  satelliteGroup = createGroup();
  bulletsGroup = createGroup();
  cometsGroup = createGroup();
  score=0;
  
 
}

function draw() {
 background(backgroundImg);

 if(keyDown("left")){
   shooter.x=shooter.x-6;
 }
  
 if(keyDown("right")){
  shooter.x=shooter.x+6;
 }
  if (keyDown("space")) {
    var bullets = createBullet();
    bullets.addImage(bulletsImg);
     bullets.x = shooter.x;
  }
  
   createSatellite();
   spawnComets();

   
  drawSprites();

  fill("white");
  strokeWeight(2);
  stroke("black");
  textSize(22);
  text("Score: "+score, 585, 60);

  if(cometsGroup.isTouching(bulletsGroup)){
    score = score+10;
    cometsGroup.destroyEach();
  }

  
 
}

function createBullet() {
  bullets= createSprite(480, 500, 5, 10);
  bullets.velocityY = -60;
  bullets.scale = 0.1;
  return bullets;
}

function createSatellite(){
  if(frameCount%200===0){
  var satellite = createSprite(Math.round(random(20, 650)),0, 10, 10);
  satellite.addImage(satelliteImg);
  satellite.velocityY = 3;
  satellite.lifetime = 200;
  satellite.scale = 0.6;
  satelliteGroup.add(satellite);

  satellite.depth = shooter.depth;
  shooter.depth = shooter.depth + 1;
}
}
function spawnComets(){
  if (frameCount % 100 === 0){
   var comets = createSprite(Math.round(random(20, 650)),0,40,40);
   comets.velocityY = 4
   
    var rand = Math.round(random(1,4));
    switch(rand) {
      case 1: comets.addImage(comet1);
              break;
      case 2: comets.addImage(comet2);
              break;
      case 3: comets.addImage(comet3);
              break;
      case 4: comets.addImage(comet4);
              break;
      default: break;
    }
              
    comets.scale = 0.4;
    comets.lifetime = 200;
   
   cometsGroup.add(comets);
   comets.depth = shooter.depth;
   shooter.depth = shooter.depth + 1;

}}
