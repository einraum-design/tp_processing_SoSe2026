
// Array (leeres Array)
//let teilnehmer = [];

let teilnehmer = ["Anna", "Peter", "Tom", "Franziska"];
let index = 0;

let ball1 = {
  x: 20,
  y: 50,
  xSpeed: 3,
  ySpeed: 4,
  s: 15,
};

let ball2 = {
  x: 100,
  y: 150,
  xSpeed: -3,
  ySpeed: 4,
  s: 8,
};

let baelle = [ball1, ball2];
let baelleIndex = 0;

let font;
function preload(){
  font = loadFont("fonts/NotoSerif_Condensed-SemiBold.ttf");
}

function setup() {
  createCanvas(400, 400, WEBGL);
  // einen Wert zum Array hinzufügen
  teilnehmer.push("Isolde");

  textFont(font, 20);
}

function draw() {
  // wegen WEBGL wird alles von der Mitte aus gezeichnet
  translate(-width/2, -height/2);

  background(220);

  textAlign(CENTER, CENTER);
  text(teilnehmer[index], width/2, height/2);

  baelleIndex = 0;
  while(baelleIndex < baelle.length){
    ellipse(baelle[baelleIndex].x, baelle[baelleIndex].y, baelle[baelleIndex].s, baelle[baelleIndex].s);

    baelle[baelleIndex].x = baelle[baelleIndex].x + baelle[baelleIndex].xSpeed;
    baelle[baelleIndex].y = baelle[baelleIndex].y + baelle[baelleIndex].ySpeed;
    baelleIndex ++;


  }
  
  let counter = 0;
  // while(CONDITION)
  // { solange die CONDITION erfüllt ist wird der Schleifenblock immer wieder ausgeführt}
  while(counter <= width){
    line(counter, 0, mouseX, mouseY);

    counter = counter + 10;
    //console.log(counter);
  }

  // einen neues Objekt erstellen und ins Array pushen ( hinzufügen )
  /* let b = {
    x: mouseX,
    y: mouseY,
    xSpeed: random(-6, 6),
    ySpeed: random(-6, 6),
    s: random(3, 12),
  };
  baelle.push(b); */

  baelle.push( {
    x: mouseX,
    y: mouseY,
    xSpeed: random(-6, 6),
    ySpeed: random(-6, 6),
    s: random(3, 12),
    }  
  );
}

function keyPressed(){
  index = index + 1; 
  // index++; Kurzschreibweise

  if(index >= teilnehmer.length){
    index = 0;
  }
}