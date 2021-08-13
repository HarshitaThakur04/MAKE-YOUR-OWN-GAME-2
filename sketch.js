const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
const START=0;
const PLAY=1;
const END=2;
var game,form,player,ball,basket1,basket2;
var gameState=START;
var ground,ball;
var startImg; 
var playImg;

function preload(){
startImg=loadImage("Images/START IMAGE.jpg")
playImg=loadImage("Images/BG.jpg")
}


function setup() {
  createCanvas(displayWidth-50,displayHeight-150);
 // createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world;
  game=new Game();
  game.start();
  player1=new Player(50,300);
  player2=new Player(250,300);
}

function draw() {
  //background("GREY");  

  Engine.update(engine);
  if(gameState===PLAY){
    game.play();
  }

  drawSprites();
}