var backgroundImg;
var cat1Img, mouse1Img;
var cat4Img, mouse4Img;
var catAnimation, mouseAnimation;
var cat, mouse;
function preload() {
    //load the images here
    backgroundImg= loadImage("images/garden.png");
    cat1Img= loadImage("images/cat1.png");
    mouse1Img= loadImage("images/mouse1.png");
   
    cat4Img= loadImage("images/cat4.png");
    mouse4Img= loadImage("images/mouse4.png");
catAnimation= loadAnimation("images/cat2.png",'images/cat3.png');
mouseAnimation= loadAnimation("images/mouse2.png",'images/mouse3.png');



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat= createSprite(870,600);
cat.addAnimation("catSitting",cat1Img);
mouse= createSprite(200,600);
mouse.addAnimation("mouseSitting",mouse1Img);
cat.scale=0.2;
mouse.scale=0.15;
}

function draw() {

    background(backgroundImg);
    //Write condition here to evaluate if tom and jerry collide
    if(cat.x - mouse.x <(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catHappy",cat4Img);
        cat.changeAnimation("catHappy");
        cat.scale=0.2;
        mouse.addAnimation("mouseHappy",mouse4Img);
        mouse.changeAnimation("mouseHappy");
        mouse.scale=0.15;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown(LEFT_ARROW)){
    mouse.addAnimation("mouseTeasing",mouseAnimation);
    
    mouse.frameDelay=25;
    mouse.changeAnimation("mouseTeasing");
    cat.velocityX=-5;
    cat.addAnimation("catRunning",catAnimation);
    cat.changeAnimation("catRunning");
}

}
