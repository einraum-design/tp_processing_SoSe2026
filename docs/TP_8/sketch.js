
// leeres Objekt 
let ball = {};
// verschiedene attribute vergeben
ball.x = 100;
ball.y = 150;
ball.r = 10;
//ball.c = color(255, 0, 0);

// objekt direkt mit werten initialisieren
let person1 = {
  vorname: "Peter",
  nachname: "Schneider",
  alter: 47,
};

let person2 = {
  vorname: "Franzsika",
  nachname: "Werner",
  alter: 32,
};






function setup() {
  createCanvas(400, 400);
  // weiter schreibweise
  // person.augenfarbe geht genause
  person1["augenfarbe"] = color(20, 50, 30);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  text(person1.vorname + " " + person1.nachname, width/2, height/2);
  text(person2.vorname + " " + person2.nachname, width/2, height/2 + 30);
}
