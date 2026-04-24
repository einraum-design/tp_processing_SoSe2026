let kreisX = 300;
let kreisY = 100;
let kreisR = 50;

let sound;

function preload(){
  sound = loadSound("assets/bell.mp3");
}


function setup() {
  createCanvas(400, 400);
  //sound.play();
}

function draw() {
  background(220);

  // berechnen des Abstands zwischen (x1/y1) -> (x2/y2)
  // let distanz = dist(x1, y1, x2, y2);

  let abstand = dist(mouseX, mouseY, kreisX, kreisY);



  if (abstand <= kreisR) {
   
    if (mouseIsPressed) {
      // grün
      fill(0, 255, 0);
      // can exectute in every frame! don't call ist here!
      //sound.play();
    } else {
      // gelb
      fill(255, 255, 0);
    }

  } else {
    // rot
    fill(255, 0, 0);
  }

  ellipse(kreisX, kreisY, kreisR * 2);
}

// EVENT LISTENER FUNKTION
// on mousePress this function is executet ONCE
function mousePressed(){
  let abstand = dist(mouseX, mouseY, kreisX, kreisY);
  if (abstand <= kreisR) {
    sound.play();
  }
}

function mouseReleased(){
  sound.stop();
}

/*
if (abstand <= kreisR && mouseIsPressed) {
  fill(0, 255, 0);
} else if (abstand <= kreisR) {
  fill(255, 255, 0);
} else {
  fill(255, 0, 0);
}
  */