// leeres Array:
//let namesArr = [];

// Array mit Werten:
let namesArr  = ["Anna", "Paul", "Anton", "Lisa", "Klaus"];
let namesIndex = 0;

// leeres Array
let imagesArr = [];
let imagesIndex = 0;

function preload(){
  // .push() erstellt ein neues Feld am Ende des Arrays
  imagesArr.push(loadImage("assets/cat1.jpg"));
  imagesArr.push(loadImage("assets/cat2.jpg"));
  imagesArr.push(loadImage("assets/cat3.jpg"));
  imagesArr.push(loadImage("assets/cat4.jpg"));
}


function setup() {
  createCanvas(400, 400);
  namesArr[0] = "Anne";
}

function draw() {
  background(220);

  imageMode(CENTER);
  image(imagesArr[imagesIndex], width/2, height/2);


  // Referenzpunkt vom Text Mittig zentriert
  textAlign(CENTER, CENTER);
  text(namesArr[namesIndex], width/2, height/2);

  
  // hier wird je draw() Durchlauf
  // also 60 mal pro sekunde die Zahl hochgezählt
  // wenn die Maustaste gedrückt ist
  /*if(mouseIsPressed){
    namesIndex = namesIndex + 1;
  }*/
}

// Mouse Event Listener
// wird je MousePress EINMAL aufgerufen
function mousePressed(){
  // namesIndex = namesIndex + 1;
  namesIndex ++; // Kurzschreibweise: Erhöhe um eins

  // damit der Zähle nicht größer als als die ArrayLänger wird:
  if(namesIndex >= namesArr.length){
    namesIndex = 0;
  }
}

// Bilder mit Tastendruck durchschalten - auf Taste loslassen
function keyReleased(){
  imagesIndex ++;
  if(imagesIndex >= imagesArr.length){
    imagesIndex = 0;
  }
}
