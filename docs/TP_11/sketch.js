let myCol;
let vid;


function setup() {
  myCol = color(255, 255, 255);
  let mycvs = createCanvas(400, 400);
  // fixierte Positionierung
  // mycvs.position(10, 10);

  // Ordnert das canvas element in den html baum ein
  mycvs.parent("p5canvas");
  mycvs.hide();

  let myBtn = createButton("click me");
  myBtn.parent("buttons");
  myBtn.style("background-color", "#ff0000");
  myBtn.mouseClicked(() => {
    console.log("button clicked!");
    myCol = color(random(255), random(255), random(255));
  });

  let cnvBtn = createButton("show Canvas");
  cnvBtn.parent("buttons");
  cnvBtn.mouseClicked(() => {
    mycvs.show();
    cnvBtn.hide();
  });

  // video einbetten
  vid = createVideo("assets/small.mp4");
  vid.style("width", "600px");
  //vid.width("550px");
  vid.showControls();

  vid.onended(() => {
    vid.hide();
    console.log("video zu Ende ...");
  });


  // video mit Script steuern:
  
  // vid.pause();
  // vid.stop();
  // vid.time(3); // an 3 Sekunden springen
}

function draw() {
  //background(220);
  image(vid, 300, 200, 100, 100);
  fill(myCol);
  ellipse(random(width), random(height), 30, 30);
}

function mouseMoved(){
  vid.play();
}
