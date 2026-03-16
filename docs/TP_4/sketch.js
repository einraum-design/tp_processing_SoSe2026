/* Processign Variable
mouseIsPressed -> Boolean: true / false

*/

let circleX, circleY;


function setup() {
  createCanvas(400, 400);
  circleX = width/2;
  circleY = height/2;
}

function draw() {
  background(220,20);

  
  // Wenn "if" Bedingung
  // if(CONDITION){ 
  //      wenn die CONDITION erfüllt ist, 
  //      wird alles im Block ausgeführt
  // }
  if(mouseIsPressed){
    fill(255, 0, 0);

    circleX = mouseX; 
    circleY = mouseY;
  } else {
    fill(0, 255, 0);
  }

  circle(circleX, circleY, 100);


  // Vergleichsoperatoren
  /*
  > größer
  < kleiner
  >= größer oder gleich
  <= kleiner oder gleich
  == gleich
  */
  circleX = circleX + 3;
  if(circleX > width){
    circleX = 0;
  }
}
