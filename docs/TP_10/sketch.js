function setup() {
  let cvs = createCanvas(400, 400);
  cvs.parent("mycanvas");

  let video = createVideo("assets/video.mp4");
  video.showControls();
  video.parent("mycanvas");


  let btn = createButton("Hello");
  btn.position(100, 100);

  btn.mouseClicked(() => {video.play()});



}

function draw() {
  background(220);
}
