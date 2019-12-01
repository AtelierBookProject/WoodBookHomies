let r = 10;//radius
let a = 0;//polar angle
let c = 20;// makes space between shapes
let angle =0;
let art;

function setup() {
  createCanvas(400, 400, WEBGL);
 //background(175);
  //img = loadImage('WoodBoi.jpg');
  art= createGraphics(400,400);
}

function draw() {
  background(175);
  push()
  let x = r+c *cos(a);// :(
  
  let y = r+c *sin(a);// More math :(
  
  art.fill(r,a,c);
  art.ellipse(x+200, y+200, 10, 10)
  
  c+=0.09;
  a+=0.8;
  pop();
  
  push()
  texture(art);
  //texture(img);
  //texture(art);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);
  box(200, mouseX, mouseY);
  
  angle+=0.03;
  pop();
}