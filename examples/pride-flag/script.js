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
    // This example uses the fill FUNCTION to style the LGBTQ Pride Flag
  // fill() - will FILL in the color of our next shape by name.
  
  // The LGBTQ flag was created by Gilber Baker in San Francisco. You can read more about it here: https://en.wikipedia.org/wiki/Rainbow_flag_(LGBT)

  // fill() - Set the fill of shapes to be RED. Baker used red to sybolize life.
  fill("red");
  // rect() -  This will draw a rectangle (filled red!) at location (0, 0) with a width and height of (500, 50)
  rect(0, 0, 500, 50);
  
  // fill() - Set the fill of shapes to be ORANGE. Baker used orange to sybolize healing.
  fill("orange");
  // rect() -  This will draw a rectangle (filled orange!) at location (0, 50) with a width and height of (500, 50)
  rect(0, 50, 500, 50);
  
  // fill() - Set the fill of shapes to be YELLOW. Baker used yellow to sybolize sunlight.
  fill("yellow");
  // rect() -  This will draw a rectangle (filled yellow!) at location (0, 100) with a width and height of (500, 50)
  rect(0, 100, 500, 50);
  
  // fill() - Set the fill of shapes to be GREEN. Baker used green to sybolize nature.
  fill("green");
  // rect() -  This will draw a rectangle (filled green!) at location (0, 150) with a width and height of (500, 50)
  rect(0, 150, 500, 50);
  
  // fill() - Set the fill of shapes to be BLUE. Baker used blue to sybolize magic, art and serenity.
  fill("blue");
  // rect() -  This will draw a rectangle (filled blue!) at location (0, 200) with a width and height of (500, 50)
  rect(0, 200, 500, 50);
  
  // fill() - Set the fill of shapes to be PURPLE. Baker used blue to sybolize spirit.
  fill("purple");
  // rect() -  This will draw a rectangle (filled blue!) at location (0, 250) with a width and height of (500, 50)
  rect(0, 250, 500, 50);  
  /* END OF YOUR CODE */
}