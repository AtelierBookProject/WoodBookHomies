let dataServer;
let pubKey = 'pub-c-9e29a8c5-0f63-44a0-a5e1-5e18e8cd3c93';
let subKey = 'sub-c-97a10462-10aa-11ea-b660-563e374d08f6';



let r = 10;//radius
let a = 0;//polar angle
let c = 20;// makes space between shapes
let angle =0;
let art;

let WoodShape = "shape";


function setup() {
  createCanvas(400, 400, WEBGL);
 //background(175);
  //img = loadImage('WoodBoi.jpg');
art = createGraphics(400,400);
dateServer = new PubNub(
  {
publish_key : pubKey,
subscribe_key : subKey,
SSL : true
  });

dataServer.addListener({message: readIncoming});
dataServer.subscribe({channels: [WoodShape]});

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

///uses built in mouseClicked function to send the data to the pubnub server
function mouseClicked() {
 

  // Send Data to the server to draw it in all other canvases
  dataServer.publish(
    {
      channel: WoodShape,
      message: 
      {
        messageText: "This is Just a test Bois"       //get the value from the text box and send it as part of the message   
      }
    });

}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works becsuse we subscribed to the channel in setup()
  
  // simple error check to match the incoming to the channelName
  if(inMessage.channel == WoodShape)
  {

    console.log(inMessage);
  }
}
