function setup() {
  // ich bin ein einzeiliger Kommentar
  /*
  ich bin ein mehrzeiliger
  Blockkommentar
  */
  
  // functionsName();
  
  // statt mit Bogenmass mit Gradzahlen         //arbeiten: DEGREES statt RADIANS
  angleMode(DEGREES);
  
  // createCanva(width, height);
  createCanvas(400, 300);
  
  
  //background(255, 255, 0);
  background(120);
  
  fill(100, 100, 255, 120);
  
  // rect (x, y, w, h);
  rect(100, 60, 100, 70);
  
  // ellipseMode definiert, von welchem 
  // Referenzpunkt aus Ellipse, Kreise und 
  // Bögen gezeichnet werden: CENTER CORNER
  ellipseMode(CORNER);
  
  // Füllfarbe wechseln
  fill(255, 100, 255);
  // Konturfarbe wechseln
  stroke(255);
  strokeWeight(3);
  
  ellipse(100, 60, 100, 70);
  
  ellipseMode(CENTER);
  
  // Füllfarbe mit 4. Paramter Transparenz
  fill(255, 255, 0, 100);
  // keine Konturfarbe
  noStroke();
  
  ellipse(100, 60, 100, 70);
  
  stroke(0, 255, 0, 100);
  strokeWeight(5);
  point(300, 100);
  
  line(250, 200, 300, 250);
  
  triangle(200, 0,200, 60, 260, 20);
  
  ellipseMode(CENTER);
  // 5. und 6. Paramter sind die Start-
  // und Endwinkel. Damit wir in Gradzahlen
  // arbeiten können muss der angleMode auf
  // DEGREES gesetzt werden (siehe ganz oben);
  arc(200, 230, 100, 100, 45, 360-45, PIE);
}

function draw() {
}