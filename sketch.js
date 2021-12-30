var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group;
  climbersGroup = new Group;
  invisibleBlockGroup = new Group
  ghost = createSprite(200,200,50,50)
  ghost.scale = 0.3
  ghost.addImage(ghostImg)
}
function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    gerarPortas()
     
    drawSprites()
}
function gerarPortas(){
if (frameCount % 240 === 0) {
  door = createSprite(200,-50);
  door.addImage(doorImg)
  door.velocityY= 1;
  door.x = Math.round(random(120,400))
  doorsGroup.add(door)
  door.lifetime= 800

  climber= createSprite(200,10)
  climber.addImage(climberImg)
  climber.x = door.x;
  climber.velocityY= 1;
  climbersGroup.add(climber)
  climber.lifetime= 800;
  
  invisibleBlock= createSprite(200,10)
  invisibleBlock.visible= true;
  invisibleBlock.x = climber.x;
  invisibleBlock.velocityY= 1;
  invisibleBlock.debug= true;
  invisibleBlock.lifetime = 800
  invisibleBlock.width = climber.width;
  invisibleBlock.height = 2;
  invisibleBlockGroup.add(invisibleBlock)

}

}