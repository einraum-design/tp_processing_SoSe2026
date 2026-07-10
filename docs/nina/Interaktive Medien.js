let videos = [];
let currentVideo = null;

const FADE_DURATION = 3.0; // Sekunden

let fadeAlpha = 0;
let font;
let fading = false;
let showText = true;
let newVideo = true;

function preload(){
  font = loadFont("assets/KleeOne-SemiBold.ttf");
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  angleMode(DEGREES);

  videos[0] = createVideo("assets/4Demokratiep._Film.mp4");
  videos[1] = createVideo("assets/4Plp._Film.mp4");
  videos[2] = createVideo("assets/4Naehrstoffp._Film.mp4");

  for (let v of videos) {
    v.hide();
    //v.size(width, height);
    v.volume(1);
    v.stop(); // wichtig: sicherer Startzustand
  }
  
  textFont(font);
  textAlign(CENTER, CENTER);
  textSize(52);
  imageMode(CENTER);
  
}

function draw() {
  background(0);

  translate(width/2, height/2);
  rotate(90);
  // VIDEO PHASE
  if (currentVideo && !showText) {
    image(currentVideo, 0, 0, displayHeight, displayWidth);

    let remaining = currentVideo.duration() - currentVideo.time();

    if (!fading && remaining <= FADE_DURATION) {
      fading = true;
    }
  }

  // FADE PHASE
  if (fading) {
    fadeAlpha += (deltaTime / 1000) * (255 / FADE_DURATION);
    fadeAlpha = constrain(fadeAlpha, 0, 255);

    fill(0, fadeAlpha);
    noStroke();
    rect(0, 0, width, height);

    if (fadeAlpha >= 255) {
      showText = true;
      fading = false;

      if (currentVideo) {
        currentVideo.stop(); // sauberer Reset
      }
    }
  }

  // TEXT PHASE
  if (showText) {
    fill(255);
    loadFont("assets/KleeOne-SemiBold.ttf")
    text("Pflanze einen Samen", width / 2, height / 2);
  }
}

function keyPressed() {
  if (newVideo) {
    if (key === "s" || key === "S") playVideo(0);
    if (key === "ö" || key === "Ö") playVideo(1);
    if (key === "5") playVideo(2);
  }

}
function mousePressed() {
  let fs = !fullscreen();
  fullscreen(fs);
}


function playVideo(index) {

  // aktuelles Video stoppen
  if (currentVideo) {
    currentVideo.stop();

  }

  currentVideo = videos[index];

  // Reset State
  fadeAlpha = 0;
  fading = false;
  showText = false;

  // Video sicher von vorne starten
  currentVideo.time(0);
  currentVideo.play();
  newVideo = false;
  currentVideo.onended(() =>freeNewvideo());
    
  //in 4k aufnehmen
}

function freeNewvideo(){
  newVideo = true;
  console.log("bereit für neues Video")
}