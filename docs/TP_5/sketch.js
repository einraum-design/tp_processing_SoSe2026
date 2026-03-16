let ellipseX = 100;
let ellipseY = 100;
let ellipseD = 50;
let speedX = 3;
let speedY = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  

  ellipseX = ellipseX + speedX;
  ellipseY = ellipseY + speedY;

  // Vergleichsoperatoren
  // > < >= <= != ==

  // Verknüpfungsoperatoren
  // CONDITION_A && CONDITION_B --> UND -> BEIDE Bedingungen müssen erfüllt sein
  // CONDITION_A || CONDITION_B --> ODER -> EINE der Bedingungen muss erfüllt sein

  /*
  if(ellipseX >= width){
    speedX = -speedX;
  }

  if(ellipseX <= 0){
    speedX = -speedX;
  } */

  // ODER-Verknüpfung: eine der Bediungen muss erfüllt sein,
  // damit die Geschwindigkeit invertiert wird
  if(ellipseX >= width   ||   ellipseX <= 0){
    speedX = -speedX;
  }



  if(ellipseY >= height){
    speedY = -speedY;
  }
  if(ellipseY <= 0){
    speedY = -speedY;
  }

  // ODER: nur wenn die ellipse auf der rechten hälft ist und die maustaste gedrückt ist:
  if( ellipseX <= width/2   &&    mouseIsPressed){
    fill(255, 0, 0);
  } else {
    fill(255);
  }

  circle(ellipseX, ellipseY, ellipseD);

}
