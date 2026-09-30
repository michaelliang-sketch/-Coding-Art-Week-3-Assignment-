let x,y,d;
let colorPalette = ['red','orange','yellow','green','blue','purple','red','orange']
let numCircles;
let spacing; 

function setup() {

  createCanvas(windowWidth, windowHeight);


  x = width/2;
  y = height/2;
  d = width/2;
  numCircles = 14;
  spacing= d/numCircles
}

function draw() {
background(0);
d = width/2;
for(i = 0; i < 10; i++)
  {
  fill(colorPalette[i]);
  circle(x,y,d);
  d = d - spacing;
  }

  
}
