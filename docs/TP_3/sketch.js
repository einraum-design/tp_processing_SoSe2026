/* Elementare Variablentypen
Boolean bool: true / false
Integer int integre Zahlen -> Ganzzahlen zB. 0, 1, 5, 120, -20, ...
FloatingPointNumbers float -> Fließkommazahlen zB. 0.0, 1.234, -5.234, ...
Character char -> Zeichen 'a', 'b', ' ', ',', ...

Objekte (komplexere Variablen)
String -> Zeichenkette "Hello World", "Paul", "", 
Color -> besteht aus Zahlen: Rot-, Grün-, Blau- und Transparenzwert 
p5.image -> besteht aus sehr vielen Farbepixeln ...
p5.font -> viele Vektorformen ...
*/

// Variable erstellen:
// let VARIABLENNAME
let userName2;

let userName = "Paul";
let xPos = 100;

let font;
let catImage;



// In den meisten anderen Programmiersprachen Typstrenge angabe:
// int meineZahl = 5;
// String name = "Paula";

function preload(){
  font = loadFont("fonts/Barrio-Regular.ttf");
  catImage = loadImage("images/cat.jpg");
}

function setup() {
  createCanvas(400, 400);
  userName = "Petra";
  textFont(font);
  textSize(32);
}

function draw() {
  background(220, 0,0);

  imageMode(CENTER);
  image(catImage, width/2, height/2, catImage.width * 0.3, catImage.height*0.3);

  circle(xPos, 200, 50, 50);

  xPos = xPos + 5;


  fill(255);
  text(userName, 50, 50);
}
