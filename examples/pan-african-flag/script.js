/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,rectMode,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

// create global variables up here

// The setup function runs ONCE when the website loads
function setup(){
  createCanvas(500, 300);
  background("white");
  noStroke();
}

// The draw function is called over and over again
function draw(){
  
  /* START OF YOUR CODE */
  // This example uses the fill and color FUNCTIONS to style the Pan-African Flag
  // fill() - will FILL in the color of our next shape
  // color() - creates a color by mixing RED, GREEN, and BLUE
  // The exact amount of RED, GREEN, and BLUE was found here: https://www.schemecolor.com/pan-african-flag-colors.php
  
  // The Pan-African flag was created by Marcus Garvey. You can read more about it here: https://en.wikipedia.org/wiki/Pan-African_flag

  // Set the fill to be RED. Garvey said "[r]ed is the color the blood which men must shed for their redemption and liberty".
  fill(color(227, 28, 35));
  // rect() -  This will draw a rectangle (filled red!) at location (0, 0) with a width and height of (500, 100)
  rect(0, 0, 500, 100);
  
  // Set the fill to be BLACK. Garvey said "black is the color of the noble and distinguished race to which we belong".
  fill(color(0, 0, 0));
  // rect() -  This will draw a rectangle (filled black!) at location (0, 100) with a width and height of (500, 100)
  rect(0, 100, 500, 100);
  
  // Set the fill to be GREEN. Garvey said "bgreen is the color of the luxuriant vegetation of our Motherland.".
  fill(color(0, 132, 62));
  // rect() -  This will draw a rectangle (filled green!) at location (0, 200) with a width and height of (500, 100)
  rect(0, 200, 500, 100);
  
  /* END OF YOUR CODE */
}