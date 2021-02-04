var player ;
var enmy1,enmy2, enmy3, enmy4,enmy5 ,enmy6 ,enmy7

function preload (){
plright = loadImage("player.png")
plleft = loadImage("player2.png")
pl = loadImage("player3.png")

en2 = loadImage("monster2.png")
en3 = loadImage("monster3.png")
en4 = loadImage("monster4.png")
en5 = loadImage("monster5.png")
en6 = loadImage("monster6.png")
}
function setup() {
  createCanvas(1000,700);
  player = createSprite(500,600,50,50)
  player.addImage(pl)
  player.scale=0.4
}

function draw() {
  background("green");  
  drawSprites();
  
  if (keyDown("up")){
player.y = player.y-10

  }
  if (keyDown("down")){
    player.y = player.y+10
  }
  if(keyDown("right")){
    player.x= player.x+10;
    player.addImage(plright)
    player.scale =1
  }
  if(keyDown("left")){
    player.x = player.x-10
    player.addImage(plleft)
  }
  enemies();
}


function enemies ()
{
if  (World.frameCount%300===0) {
  enmy1 = createSprite(50,random(200,700),30,30)
  enmy1.velocityX = 2
  enmy1.addImage(en4)
  enmy1.scale=0.25

  enmy4 = createSprite(950,random(200,700),30,30)
  enmy4.velocityX = -2
  enmy4.addImage(en2)
  enmy4.scale=0.25
}

if (World.frameCount%400===0) {
  enmy2 = createSprite(50,random(200,700),30,30)
  enmy2.velocityX = 2
enmy2.addImage(en2)
enmy2.scale = 0.25

  enmy5 = createSprite(950,random(200,700),30,30)
  enmy5.velocityX = -2
  enmy5.addImage(en5)
  enmy5.scale = 0.25
}

if (World.frameCount%200===0){


  enmy3 = createSprite(50,random(200,700),30,30)
  enmy3.velocityX = 2
  enmy3.addImage(en3)
  enmy3.scale=0.25


  enmy6 = createSprite(950,random(200,700),30,30)
  enmy6.velocityX = -2
  enmy6.addImage(en6)
  enmy6.scale = 0.25
}

}
