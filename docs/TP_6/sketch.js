function setup() {
  createCanvas(800, 600);
  angleMode(DEGREES);
  
}

function draw() {
  background(220);

  // translate -> verschiebe das Zeichenkoordiantensystem
  // translate(X-WERT, Y-WERT, (?Z-WERT));
  translate(150, 100);
  
  rotate(mouseX);
  // scale(x-direction, y-direction)
  scale(1, -1);
  
  rect(0, 0, 100, 60);
  rect(-50, -30, 100, 60);

  // resetMatrix() --> resets all Transformation (translation, rotation and scale)
  resetMatrix();
  text("meine erste rotation - text aber ohne rotation", 30, 30);


  // translate to center of canvas
  translate(width/2.0, height/2.0);
  rotate(mouseX);
  rect(0, 0, 200, 40);

  translate(200, 0);
  rotate(mouseY);
  rect(0, 0, 200, 30);


}
