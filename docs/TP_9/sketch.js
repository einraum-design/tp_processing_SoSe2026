let namesArray = ["Peter", "Paula", "Pierre", "Pia", "Philipp"];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);


  /*line(0, 0, mouseX, mouseY);
  line(10, 0, mouseX, mouseY);
  line(20, 0, mouseX, mouseY);
  line(30, 0, mouseX, mouseY);
  line(40, 0, mouseX, mouseY);*/

  // while(CONDITION){ 
  //   solange die CONDITION erfüllt ist, 
  //   wird alles im Rumpf (alles zwischen "{}" ) 
  //   immer wieder wiederholt
  // }

  let xPos = 0;
  while(xPos <= width){
    let col = map(xPos, 0, width, 0, 255);
    stroke(col, 0, 255-col);
    line(xPos, 0, mouseX, mouseY);
    xPos = xPos + 10;
  }


  noStroke();
  let index = 0;
  while(index < namesArray.length){
    text(namesArray[index], 0, 20 + index * 15);
    index ++;
  }




}
