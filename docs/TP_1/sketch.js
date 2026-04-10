// einzeiliger Kommentar
/* 
mehrzeiliger
Kommentar
*/
function setup() {
  // Winkel in Grad und nicht in Bogenmass
  angleMode(DEGREES);
  
  createCanvas(400, 300);
  background(155, 55, 0);
  
  // rectMode(CENTER); // oder CORNER
  rect(120,160, 120, 80);
  
  // Füllfarbe definieren
  fill(100, 150, 255);
  
  ellipse(120,160, 120, 80);
  
  // ellipseMode setzt den Referenzpunkt
  // aller Kreise, Ellipsen und Bögen
  // CORNER: oben links
  // CENTER: Mittig
  ellipseMode(CORNER);
  
  fill(255, 0, 0);
  // Konturenfarbe festlegen
  stroke(0, 255, 0);
  
  // Konturstaerke ändern:
  strokeWeight(5);
  ellipse(120,160, 120, 80);
  
  
  // keine Kontur
  noStroke();
  fill(0, 0, 255, 100)
  ellipse(200, 200, 120, 80);
  
  ellipseMode(CENTER);
  fill(255, 255, 0);
  // Matematische Operatoren + - * / %
  arc(300, 100, 80, 80, 0 + 45, 360 - 45, PIE);
  
  
  
}
