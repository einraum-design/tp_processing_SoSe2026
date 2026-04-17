// Comparison operators
  // a > b --> a is greater than b
  // a < b --> a is smaller than b
  // a >= b --> a is geater or equal b
  // a <= b --> a is smaller or equal b
  // a == b --> a is equal b
  // a != b --> a is not equal b

// Verknüpfungs operatoren
// ConditionA && ConditionB --> AND: CA und CB müssen erfüllt sein
// ConditionA || ConditionB --> OR: es genügt, wenn eine Bedingung erfüllt ist

let ballX, ballY, speedX, speedY, ballSize;
let ball;

function preload(){
  ball = loadImage("assets/ball.png");
}

function setup() {
  createCanvas(400, 400);
  // damit das Bild von der Mitte aus gezeichnet wird
  imageMode(CENTER);

  ballX = width/2.0;
  ballY = height/2.0;
  ballSize = 80;

  speedX = random(-12, 12);//3.0;
  speedY = random(-12, 12);//2.0;
}

function draw() {
  background(220, 200);

  ballX = ballX + speedX;
  ballY = ballY + speedY;

  // only in the moment, when ball arrives right edge
  /*if( ballX >= width ){
    // invert speedX
    speedX = -1 * speedX; //-3
  }

  if( ballX <= 0){
    // invert speedX
    speedX = -1 * speedX;
  }*/

  // change x speed at edges
  if( ballX >= width - ballSize/2 || ballX <= ballSize/2 ){
    // invert speedX
    speedX = -1 * speedX; //-3
  }

  // change y speed at edges
  if( ballY >= height - ballSize/2 || ballY <= ballSize/2){
    speedY = -speedY;
  }

  image(ball, ballX, ballY, ballSize, ballSize);
}
