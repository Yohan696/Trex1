
var trex ,trex_running, ground; 
function preload(){
  trex_running = loadAnimation ("trex1.png", "trex3.png", "trex4.png" );

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(40,150, 30,20);
  trex.addAnimation ("TREXMOVING", trex_running);
  trex.scale = 0.4;
  ground = createSprite(300,170,600,5);
  }

function draw(){
  background("yellow")
  drawSprites();
    if (keyDown ("space")) {
      trex.velocityY = -9;
       } 
    trex.velocityY = trex.velocityY + 0.5;
    trex.collide (ground);
}
