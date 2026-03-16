let image;

function preload(){
  image = loadImage("cat1.jpg");
}

function setup() {
  createCanvas(400, 400);

  image = resize(image, 100);
}

function draw() {
  background(220);
}


function resize(img, max){
  if(img.width >= img.height){
    
  }
}