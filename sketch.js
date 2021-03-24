var bgImg;
var cat;

function preload() {
    //load the images here
     bgImg = loadImage("images/garden.png");
     mouseImg1 = loadAnimation("images/mouse1.png");
     mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
     catImg1 = loadAnimation("images/cat1.png");
     catImg2 = loadAnimation("images/cat2.png","images/cat3.png");


    }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {

    background("bgImg");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mo0use.x < cat.width/2 - mouse.width/2){


    }
     
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyPressed === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing",mouseImg2);
      mouse.changeAnmation("mouseTeasing");
      mouse.frameDelay = 10;
    }

}
