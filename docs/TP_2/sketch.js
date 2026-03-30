/*
Processing Variable:
mouseX -> aktuelle mouseX-Position
mouseY -> aktuelle mouseY-Position
width -> Breite der Zeichenfläche
height -> Höhe der Zeichenfläche
frameCount -> Anzahl der bisher gezeichneten Frames
*/


function setup() {
  createCanvas(800, 600);

  
}

function draw() {
  background(220);
  
  fill(255, mouseY, 0);
  rect(mouseY, mouseX, 200, 100);

  ellipse(width/2, height/2, 120, 120);

  rect(0 ,height-80 ,width, 80);


  fill(0, 0, 255);
  ellipse(frameCount%width, 70, 60, 60);
}
