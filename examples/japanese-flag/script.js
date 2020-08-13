/*global abs,angleMode,append,background,beginShape,bezier,box,camera,ceil,CENTER,color,cone,cos,createCanvas,createCanvas,createGraphics,curveVertex,cylinder,DEGREES,displayHeight,displayWidth,dist,div,DOWN_ARROW,ellipse,endShape,fill,floor,frameCount,frameRate,height,image,key,keyCode,keyIsDown,keyIsPressed,keyIsPressed,keyPressed,LEFT,LEFT_ARROW,lerpColor,line,loadImage,loadJSON,loadSound,map,mouseIsPressed,mouseX,mouseY,noFill,noLoop,normalMaterial,noStroke,p5,plane,point,pointLight,pop,push,push,RADIANS,radians,random,rect,rectMode,resizeCanvas,resizeCanvas,RIGHT,RIGHT_ARROW,rotate,rotateX,rotateY,rotateZ,round,round,scale,shuffle,sin,sphere,stroke,strokeWeight,text,textAlign,textFont,textSize,texture,textWidth,torus,translate,triangle,UP_ARROW,WEBGL,width,windowHeight,windowHeight,windowWidth,world */

// create global variables up here

// The setup function runs ONCE when the website loads
function setup(){
  createCanvas(600, 400);
  background("white");
  noStroke();
}

// The draw function is called over and over again
function draw(){
  
  /* START OF YOUR CODE */
  // This example uses the fill and ellipse FUNCTIONS to style the Japanese flag
  // fill() - will FILL in the color of our next shape
  // ellipse() - draws an ellipse (also known as an oval) on the canvas
  
  // The flag of Japan is officially called Nisshōki (日章旗, the "flag of sun"), but is more commonly known in Japan as Hinomaru (日の丸, the "circle of the sun").

  // Set the fill to be RED. Garvey said "[r]ed is the color the blood which men must shed for their redemption and liberty".
  fill("red");
  // rect() -  This will draw a rectangle (filled red!) at location (0, 0) with a width and height of (500, 100)
  ellipse(300, 200, 240);

  
  /* END OF YOUR CODE */
}