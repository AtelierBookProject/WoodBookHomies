/*

Blank P5 template
 */
let woodimage;

function preload(){
	woodimage = loadImage("img/wood.jpg");
}

function setup()
{
createCanvas(windowWidth,windowHeight);
image(woodimage,0,0);

}


function draw() 
{
fill(0);
textSize(30);
text(rotationx,0,height/2);
}
