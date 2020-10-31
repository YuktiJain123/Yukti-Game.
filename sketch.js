var canvas, backgroundImage;
var form;

function preload(){
  backgroundImage=loadImage("images/bg.png");
  }

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  background(backgroundImage);
  form=new Form()
  form.display();
}


function draw(){
 

}
