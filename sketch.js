var canvas;
var music;
var box;
var rect1,rect2,rect3,rect4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    rect1=createSprite(80,590,190,13);
    rect1.shapeColor="red";
    rect2=createSprite(285,590,190,13);
    rect2.shapeColor="green";
    rect3=createSprite(490,590,190,13);
    rect3.shapeColor="blue";
    rect4=createSprite(695,590,190,13);
    rect4.shapeColor="yellow";

    box = createSprite(350,200,20,20);
    box.shapeColor="white";
    box.velocityX=3;
    box.velocityY=3;
}

function draw() {
    background("black");
    

 box.display();
 rect1.display();
 rect2.display();
 rect3.display();
 rect4.display();

    //add condition to check if box touching surface and make it box

    if(box.isTouching(rect1)){
      box.shapeColor="red";
      bounceoff(rec1,box);
    }

    if(box.isTouching(rect2)){
      box.shapeColor="green";
      bounceoff(rect2,box);
    }

    if(box.isTouching(rect3)){
      box.shapeColor="blue";
      bounceoff(rect3.box);
    }

    if(box.isTouching(rect3)){
      box.shapeColor="yellow";
      bounceoff(rect4,box);
    }
}
