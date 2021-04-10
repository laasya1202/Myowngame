var bg, bgimg
var music;
var tile;
var tilesGroup;
var sc;
var score = 0;
function preload() {
 bgimg = loadImage("pianotilesbg1.png");
 music = loadSound("Song1.mp3");
}

function setup() {
  createCanvas(1200,800);

 bg =  createSprite(600, 750);
 bg.addImage("background",bgimg)
 bg.velocityY=2;
 bg.scale=2.5;
 //sc=createSprite(500, 20, 230, 30)
 tilesGroup = new Group();
}

function draw() {
  background(0);  
 textSize(30)
 fill("red")
 //text("score" + score, 300, 20);
 //score = score + frameCount/60;
 text("qwerrty", 400, 20)
  if(bg.y>400){
bg.y= bg.height/2
  }
  btiles();
  if(mousePressedOver(tile)){
music.play();
//score = score + 1;
//console.log(score);

tilesGroup.destroyEach();
  }
  drawSprites();
}

function btiles() {
  if(frameCount%50 === 0){
    tile = createSprite(random(400, 800), 200, 80, 140 )
    tile.velocityY = 6;
    tile.shapeColor = "black";
    tilesGroup.add(tile);
  }

}

function wtiles() {
  
}