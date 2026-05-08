
// leeres Objekt 
let ball = {};
// verschiedene attribute vergeben
ball.x = 100;
ball.y = 150;
ball.r = 10;
ball.c = color(255, 0, 0);

// objekt direkt mit werten initialisieren
let person1 = {
  vorname: "Peter",
  nachname: "Schneider",
  alter: 47,
};

// weiter schreibweise
// person.augenfarbe geht genause
person["augenfarbe"] = "gruen";




function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
