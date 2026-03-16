function setup() {
  //createCanvas(400, 400);

  createCanvas(400, 400, WEBGL);


  angleMode(DEGREES);
}

function draw() {

  let col = color(  map(mouseX, 0, width, 255 ,0 )  );
  background(col);

  //translate(width/2, height/2);
  rotateY(mouseX);

  noFill();
  box(100, 100, 100);

  scale(0.5, 0.5);


  // second() -> 0 - 60 (Ganzzahlen int)

  // Dreisatzfunktion rechnet ein Zahl von einem Wertebereich in einen
  // neuen Wertebereich um
  // OUTPUT = map(INPUT, STARTINPUT, ENDINPUT, STARTOUTPUT, ENDOUTPUT);
  let secondRot = map(second(), 0, 60, 0, 360);
  rotate(secondRot);
  strokeWeight(2);
  line(0, 0, 0, -190);

  // Lösungsweg 1:
  // Rotation vom Sekundenzeiger wieder zurückdrehen 
  rotate(-secondRot);


  // Lösungsweg 2:
  // Aktuellen Zustand vom Koordinatensystem zwischenspeichern 
  // und später wieder darauf zurücksetzen:
  // push() -> zwischenspeichern
  // pop() -> aus letzen zwischengespeicherten zustand zurücksetzen
  // für jede push() muss es auch ein pop() geben
  push();

  // minute() -> 0 - 60 (Ganzzahlen int)
  let minuteRot = map(minute() + second()/60, 0, 60, 0, 360);
  rotate(minuteRot);
  strokeWeight(4);
  line(0, 0, 0, -170);
  pop();

  push();
  // hour() -> 0 - 24 (Ganzzahlen int)
  let hourRot = map(hour() +  minute()/60 , 0, 24, 0, 360*2);
  //let hourRot = map(hour(), 0, 12, 0, 360);
  rotate(hourRot);
  strokeWeight(6);
  line(0, 0, 0, -150);
  pop();



}
