/* Processing Variable:
mouseX --> Zahl: Maus-X Kooridinate innerhalb vom Canvas
mouseY --> Zahl: Maus-Y Kooridinate innerhalb vom Canvas
width  --> Zahl: Breite vom canvas
height --> Zahl: Höhe vom canvas
frameCount --> Zahl: Zählt jeden draw Durchgang ein hoch
               wird jeden frame eins größer
*/


/* Random
random(MAX) -> gibt eine zufällige Zahl von 0 - MAX
random(MIN, MAX) -> gibt eine ...  von MIN - MAX
*/


function setup() {
  createCanvas(600, 700);
  angleMode(DEGREES);
  
  // die frameRate ist standartmäßig bei
  // 60 Wiederholungen pro Sekunde
  // frameRate(1);
}

function draw() {
  //background(220);
  fill(255, 0, 0, mouseY);
  ellipse(mouseX, 200, 100, 100);
  
  fill(255, 255, 0);
  arc(60, 60, 100, 100, mouseX, 360-mouseX, PIE);
  
  // Position abhängig von Breite und Höhe des Canvas
  // --> wird immer mittig gezeichnet
  circle(width/2, height/2, 50);
  
  fill(255);
  rect(0, height-40, width, 40);
  
  circle(frameCount, 150, frameCount/10.0);
  
}