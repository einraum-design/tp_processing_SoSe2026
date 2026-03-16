function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);

  
  
  //scale(2, 0.5);

  // verschieben des Koodinatensystems
  // Verschiebe auf Schulter
  translate(200, 120);
  

  // rotiere Schulter
  rotate(mouseX);

  //rectMode(CENTER);
  // zeichne oberarm
  rect(0, 0, 120, 30);

  translate(120, 0);

  rotate(mouseY);


  rect(0, 0, 100, 50);

  resetMatrix();
  fill(0);
  text("Hello", 30, 30);
  fill(255);


  //rect(200, 120, 40, 30);
}
