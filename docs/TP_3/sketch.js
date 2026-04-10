/*
elementare Variablentypen
Boolean (bool) -> true, false
Ganzzahlen (Integer) -> 0, 1, 2, 3, -205, ... 
Fließkommazahlen (Float) -> 0.5, 3.14, -2.718, 1.0
Zeichen (Char) -> 'a', 'b', 'c', '1', '?', ' '


Objeke (komplexere Datentypen)
Zeichenkette String -> "Hallo", "p5.js", "123", " "
color -> besteht aus 3 oder 4 Zahlen (RGB oder RGBA) 
p5.image -> Bilddatei besteht aus ganz vielen Farbwerten ...
p5.font -> Schriftart (besteht aus Formen -> Formen besestehen aus Zahlenwerten)
*/

// Variable erstellen
let myVariable;
// Variable erstennen und mit einem Wert belegen
// "=" ist der Zuweisungsoperator
let myName = "Max"; // String
let myAge = 30; // Integer

let myFont;
let myImage;

function preload(){
  myImage = loadImage("assets/cat.jpg");
  myFont = loadFont("assets/Merriweather_24pt-SemiBold.ttf");
}

function setup() {
  createCanvas(400, 400);
  // wer der Variable ersetzen:
  myName = "Tom"; 
}

function draw() {
  background(220);

  fill(0);
  // use the font of the variable "myFont"
  textFont(myFont);
  textSize(18);
  text(myName, 30, 70);
  // Strings verketten (concatenation) mit dem "+" Operator
  // (Zahlen werden mit + addiert)
  text("Mein Alter: " + myAge, 30, 90);

  myAge = myAge + 1; // Erhöhe das Alter um 1

  // der Variablentyp p5.image hat zusätliche Eigenschaften, z.B. width und height
  // mit dem .-Oparator kann darauf zugegriffen werden
  image(myImage, mouseX, mouseY, myImage.width/2.0, myImage.height/2.0);

  // if - Bedingungen
  // if(CONDITION){ wenn die CONDITION wahr ist, 
  //         dann führe den Code in den geschweiften Klammern aus 
  // }

  // mouseIsPressed ist eine p5js eigene Variable, 
  // die true ist, wenn die Maus gedrückt ist
  if(mouseIsPressed){
    text("Maus ist gedrückt", 30, 150);
    myAge = 0;
  }

}
