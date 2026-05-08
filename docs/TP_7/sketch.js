function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);


  translate(width / 2, height / 2);

  // second() --> aktuelle Sekundenzahl 0 - 60

  // Dreisatzfunktion map()
  // (float) OUTPUT = map(INPUT, INPUT_START, INPUT_END, OUTPUT_START, OUTPUT_END);
  let secondRotation = map(second(), 0, 60, 0, 360);
  rotate(secondRotation);

  stroke(255, 0, 0);
  strokeWeight(2);
  line(0, 0, 0, -180);

  // WEG A
  // Rotation vom Sekundenzeiger wieder resetten:
  rotate(-secondRotation);
  

  // WEG B
  // Zustand vom Koordinatensystem (der Transformationen) zwischenspeichern
  // für jedes zwischenspeichern "push()" muss es ein "pop()" geben
  push();

    // minute() --> 0, 60
    let minuteRotation = map(minute() + second()/60.0, 0, 60, 0, 360);
    rotate(minuteRotation);

    stroke(0);
    strokeWeight(3);
    line(0, 0, 0, -175);

  pop();

  // hour() -> 0 - 24
  push();
    let hourRotation = map(hour() + minute()/60.0, 0, 12, 0, 360);
    rotate(hourRotation);
    stroke(0);
    strokeWeight(6);
    line(0, 0, 0, -150);
  pop();
}
