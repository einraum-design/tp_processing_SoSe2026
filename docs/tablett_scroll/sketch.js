/*let graph1 = [];
let graph2 = [];
let maxPoints;

let logLines = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  textFont("monospace");

  maxPoints = 300;

  for (let i = 0; i < maxPoints; i++) {
    graph1.push(random(40, 80));
    graph2.push(random(20, 90));
  }

  for (let i = 0; i < 35; i++) {
    logLines.push(generateLog());
  }
}

function draw() {

  background(18);

  let headerH = 70;

  // HEADER
  noStroke();
  fill(100,255,60);
  rect(0,0,width,headerH);

  fill(20);
  textAlign(CENTER,CENTER);
  textSize(30);
  text("platunie v.1.alpha", width/2, headerH/2);

  //------------------------------------
  // Layout

  let margin = 20;
  let gap = 20;

  let contentY = headerH + margin;

  let leftW = width * 0.55;
  let rightW = width - leftW - margin*2 - gap;

  let boxH = (height-headerH-margin*2-gap)/2;

  //------------------------------------
  // Box 1

  drawGraphBox(
    margin,
    contentY,
    leftW,
    boxH,
    graph1,
    color(0,255,180)
  );

  //------------------------------------
  // Box 2

  drawGraphBox(
    margin,
    contentY+boxH+gap,
    leftW,
    boxH,
    graph2,
    color(255,120,0)
  );

  //------------------------------------
  // SYS LOG

  let rx = margin+leftW+gap;

  fill(30);
  stroke(70);
  rect(rx,contentY,rightW,boxH*2+gap);

  fill(100,255,100);
  noStroke();

  textAlign(LEFT,TOP);
  textSize(18);
  text("SYS.LOG",rx+15,contentY+10);

  textSize(13);

  let yy = contentY+40;

  for(let i=0;i<logLines.length;i++){
    text(logLines[i],rx+15,yy);
    yy+=18;
  }

  //------------------------------------
  // Update Graphen

  graph1.push(constrain(graph1[graph1.length-1]+random(-6,6),5,95));
  graph2.push(constrain(graph2[graph2.length-1]+random(-9,9),5,95));

  if(graph1.length>maxPoints) graph1.shift();
  if(graph2.length>maxPoints) graph2.shift();

  //------------------------------------
  // Update Log

  if(frameCount%4==0){
      logLines.push(generateLog());

      if(logLines.length>35){
          logLines.shift();
      }
  }
}

function drawGraphBox(x,y,w,h,data,col){

  fill(28);
  stroke(70);
  rect(x,y,w,h);

  fill(180);
  noStroke();
  textSize(16);
  textAlign(LEFT,TOP);
  text("LIVE DATA STREAM",x+15,y+10);

  // Raster

  stroke(50);

  for(let i=0;i<10;i++){
    let yy=map(i,0,9,y+35,y+h-15);
    line(x+10,yy,x+w-10,yy);
  }

  for(let i=0;i<12;i++){
    let xx=map(i,0,11,x+10,x+w-10);
    line(xx,y+35,xx,y+h-15);
  }

  // Graph

  noFill();
  stroke(col);
  strokeWeight(2);

  beginShape();

  for(let i=0;i<data.length;i++){

      let xx=map(i,0,maxPoints-1,x+10,x+w-10);
      let yy=map(data[i],0,100,y+h-20,y+45);

      vertex(xx,yy);

  }

  endShape();
}

function generateLog(){

  let id = floor(random(1000,9999));
  let mem = nf(random(0,100),2,2);
  let cpu = nf(random(0,100),2,2);
  let flux = nf(random(0,9999),4,1);
  let packet = floor(random(100000,999999));

  let states=[
    "SYNC",
    "CACHE",
    "NODE",
    "FRAME",
    "STREAM",
    "VECTOR",
    "PROTO",
    "SCAN",
    "INDEX",
    "MATRIX"
  ];

  let s=random(states);

  return "["+
    nf(hour(),2)+":"+
    nf(minute(),2)+":"+
    nf(second(),2)+"] "+
    s+
    " | ID:"+id+
    " CPU:"+cpu+"%"+
    " MEM:"+mem+"%"+
    " FLX:"+flux+
    " PKT:"+packet;
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
*/





/*let energy = 0;
let targetEnergy = 0;

let blink = true;
let lastBlink = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textFont("monospace");
}

function draw() {

  background(5);

  // Energie fällt langsam wieder ab
  targetEnergy *= 0.94;
  energy = lerp(energy, targetEnergy, 0.12);

  //-----------------------------------
  // Header

  noStroke();
  fill(90,255,80);
  rect(0,0,width,70);

  fill(0);
  textAlign(CENTER,CENTER);
  textSize(28);
  text("platunie v.1.alpha",width/2,35);

  //-----------------------------------
  // Warnfeld

  let boxY = 90;
  let boxH = 120;

  stroke(70,255,120);
  strokeWeight(2);
  noFill();
  rect(40,boxY,width-80,boxH,10);

  fill(120,255,120);
  noStroke();
  textAlign(LEFT);
  textSize(18);
  text("WARNING",60,boxY+28);

  //-----------------------------------
  // Blinken

  if(millis()-lastBlink>random(80,250)){
    blink=!blink;
    lastBlink=millis();
  }

  if(energy<0.95){

      if(blink){
          fill(255,60,60);
      }else{
          fill(90,20,20);
      }

      stroke(255,60,60);
      strokeWeight(3);

      triangle(
        90,boxY+95,
        60,boxY+45,
        120,boxY+45
      );

      fill(255);
      noStroke();
      textAlign(CENTER,CENTER);
      textSize(20);
      text("!",90,boxY+63);
  }

  //-----------------------------------
  // Scrollfeld

  let fieldY = boxY+150;
  let fieldH = height-fieldY-40;

  stroke(60,255,120);
  noFill();
  rect(40,fieldY,width-80,fieldH,10);

  //-----------------------------------
  // Kreis

  push();

  translate(width/2,fieldY+fieldH/2);

  let r = min(width,height)*0.22;

  stroke(60,255,120);
  strokeWeight(5);

  let segments = floor(map(energy,0,1,0,72));

  for(let i=0;i<segments;i++){

      let a=i*5;

      drawingContext.shadowBlur=18;
      drawingContext.shadowColor="#66ff66";

      arc(
        0,
        0,
        r*2,
        r*2,
        a,
        a+3
      );

  }

  drawingContext.shadowBlur=0;

  //-----------------------------------
  // Mittelpunkt

  noStroke();
  fill(60,255,120);

  circle(0,0,10);

  pop();

  //-----------------------------------
  // Prozentanzeige

  fill(60,255,120);
  noStroke();
  textAlign(CENTER);

  textSize(18);
  text(
    "SCROLL ENERGY  "+nf(energy*100,2,0)+" %",
    width/2,
    fieldY+fieldH-25
  );

}

function mouseWheel(event){

  targetEnergy += abs(event.delta)/900;

  targetEnergy = constrain(targetEnergy,0,1);

  return false;

}

function touchMoved(){

  targetEnergy += 0.035;
  targetEnergy = constrain(targetEnergy,0,1);

  return false;

}

function windowResized(){

  resizeCanvas(windowWidth,windowHeight);

}*/




/*let energy = 0;
let targetEnergy = 0;

let warnings = [
  "SYSTEM FAILURE",
  "VECTOR DESYNC",
  "SIGNAL LOST",
  "MEMORY OVERFLOW",
  "SCROLL REQUIRED",
  "CORE UNSTABLE"
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont("monospace");
}

function draw() {
  background(8);

  // Energie decay
  targetEnergy *= 0.94;
  energy = lerp(energy, targetEnergy, 0.12);

  drawHeader();
  drawWarningPanel();
  drawWarningField();
  drawEnergyText();
}

// ---------------- HEADER ----------------

function drawHeader() {
  noStroke();
  fill(80, 255, 90);
  rect(0, 0, width, 70);

  fill(0);
  textAlign(CENTER, CENTER);
  textSize(50);
  text("platunie v.1. alpha", width / 2, 35);
}

// ---------------- WARNING PANEL ----------------

function drawWarningPanel() {
  let y = 90;

  noFill();
  stroke(80, 255, 120);
  rect(40, y, width - 80, 120, 8);

  fill(80, 255, 120);
  noStroke();
  textAlign(LEFT);
  textSize(16);
  text("WARNING SYSTEM", 60, y + 25);

  drawTriangleWarning(y);
}

// ---------------- WARNTREIANGLE ----------------

function drawTriangleWarning(y) {

  let alpha = map(energy, 0, 1, 255, 0);

  if (alpha <= 5) return;

  fill(255, 60, 60, alpha);
  stroke(255, 60, 60, alpha);
  strokeWeight(2);

  let cx = 90;
  let cy = y + 75;

  // Spitze nach oben
  triangle(
    cx, cy - 35,
    cx - 25, cy + 25,
    cx + 25, cy + 25
  );

  noStroke();
  fill(255, alpha);
  textAlign(CENTER, CENTER);
  textSize(18);
  text("!", cx, cy + 5);
}

// ---------------- SCROLL FIELD ----------------

function drawWarningField() {

  let y = 230;
  let h = height - y - 40;

  noFill();
  stroke(80, 255, 120);
  rect(40, y, width - 80, h, 8);

  // Warnüberflutung wenn energy niedrig
  let intensity = map(energy, 0, 0.4, 1, 0);
  intensity = constrain(intensity, 0, 1);

  fill(80, 255, 120, 255 * intensity);
  textSize(14);
  textAlign(CENTER);

  for (let i = 0; i < 18; i++) {
    let x = random(60, width - 60);
    let yy = random(y + 20, y + h - 20);
    text(random(warnings), x, yy);
  }
}

// ---------------- ENERGY ----------------

function drawEnergyText() {
  fill(80, 255, 120);
  noStroke();
  textAlign(CENTER);

  textSize(16);
  text(
    "SCROLL ENERGY: " + nf(energy * 100, 2, 0) + " %",
    width / 2,
    height - 20
  );
}

// ---------------- INPUT ----------------

function mouseWheel(event) {
  targetEnergy += abs(event.delta) / 900;
  targetEnergy = constrain(targetEnergy, 0, 1);
  return false;
}

function touchMoved() {
  targetEnergy += 0.03;
  targetEnergy = constrain(targetEnergy, 0, 1);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {

  background(8);

  // Energie decay
  targetEnergy *= 0.94;
  energy = lerp(energy, targetEnergy, 0.12);

  drawHeader();
  drawWarningPanel();
  drawWarningField();

  drawEnergyCircle();   // ← NEU
  drawEnergyText();
}

function drawEnergyCircle() {

  let cx = width / 2;
  let cy = height / 2 + 20;

  let radius = min(width, height) * 0.22;

  let segments = 96;

  // Anzahl aktiver Segmente abhängig von Energie
  let active = floor(energy * segments);

  stroke(80, 255, 120);
  strokeWeight(4);
  noFill();

  for (let i = 0; i < active; i++) {

    let startA = map(i, 0, segments, 0, TWO_PI);
    let endA = startA + TWO_PI / segments * 0.8;

    arc(
      cx,
      cy,
      radius * 2,
      radius * 2,
      startA,
      endA
    );
  }

  // Mittelpunkt
  noStroke();
  fill(80, 255, 120);
  circle(cx, cy, 8);
}

  drawSysLog();
  drawLiveGraph();

  let logLines = [];

function drawSysLog() {

  let x = width * 0.62;
  let y = 90;
  let w = width * 0.33;
  let h = height - 130;

  // Rahmen
  noFill();
  stroke(80, 255, 120);
  rect(x, y, w, h, 8);

  // Titel
  noStroke();
  fill(80, 255, 120);
  textAlign(LEFT);
  textSize(14);
  text("SYS.LOG", x + 10, y + 20);

  // Log erzeugen
  if (frameCount % 6 === 0) {
    logLines.push(generateLog());
    if (logLines.length > 28) logLines.shift();
  }

  // CLIP BEREICH
  drawingContext.save();
  drawingContext.beginPath();
  drawingContext.rect(x + 5, y + 30, w - 10, h - 40);
  drawingContext.clip();

  fill(80, 255, 120);
  textSize(11);

  let yy = y + 45;

  for (let i = 0; i < logLines.length; i++) {
    text(logLines[i], x + 10, yy);
    yy += 14;
  }

  drawingContext.restore();
}

function generateLog() {

  let states = [
    "SYNC", "CACHE", "VECTOR",
    "STREAM", "NODE", "FRAME",
    "INDEX", "PING", "ROUTE"
  ];

  return (
    nf(hour(), 2) + ":" +
    nf(minute(), 2) + ":" +
    nf(second(), 2) +
    " | " +
    random(states) +
    " | " +
    floor(random(1000, 9999)) +
    " | SIG " +
    floor(random(10, 99)) + "%"
  );
}

let graph = [];

function drawLiveGraph() {

  let x = 40;
  let y = height - 140;
  let w = width * 0.55;
  let h = 90;

  // Rahmen
  noFill();
  stroke(80, 255, 120);
  rect(x, y, w, h, 8);

  // Daten erzeugen
  graph.push(random(20, 80));
  if (graph.length > 60) graph.shift();

  // Linie
  noFill();
  stroke(80, 255, 120);
  strokeWeight(2);

  beginShape();

  for (let i = 0; i < graph.length; i++) {

    let px = map(i, 0, graph.length, x + 10, x + w - 10);
    let py = map(graph[i], 0, 100, y + h - 10, y + 10);

    vertex(px, py);
  }

  endShape();
}*/








let energy = 0;
let lastScroll = 0;

const maxEnergy = 100;

function setup() {

    createCanvas(windowWidth, windowHeight);

    textFont("Orbitron");

}

function draw() {

    background(0);
    //------------------------------------
    // Energie abbauen
    //------------------------------------

    if (millis() - lastScroll > 80) {
        energy -= 0.5;
    }

    energy = constrain(energy,0,maxEnergy);

    //------------------------------------
    // Farben
    //------------------------------------

    let glow = map(energy,0,maxEnergy,120,255);

    stroke(0,glow,0);

    //------------------------------------
    // Rahmen
    //------------------------------------

    strokeWeight(3);
    noFill();

    rect(15,15,width-30,height-30);

    //------------------------------------
    // Header
    //------------------------------------

    noStroke();
    fill(0,255,0);

    rect(30,30,270,38);

    fill(0);

    textSize(18);
    textAlign(CENTER,CENTER);

    text("platunie v.1. alpha", 165, 49);

    //------------------------------------
    // Anzeige
    //------------------------------------

    if(energy<1){

        fill(0,255,0);

        textSize(34);

        text(
            "SCROLL TO GIVE LIFE",
            width/2,
            height/2
        );

    }

    else{
        drawBattery();
    }

}

function drawBattery(){

    push();

    translate(width/2,height/2);

    let glow = map(energy,0,maxEnergy,80,255);

    stroke(0,glow,0);

    strokeWeight(4);

    noFill();

    //------------------------------------
    // Batterie
    //------------------------------------

    rect(-140,-35,280,70);

    rect(140,-12,18,24);

    //------------------------------------
    // Segmente
    //------------------------------------

    let segments = 10;

    let filled = floor(
        map(energy,0,maxEnergy,0,segments)
    );

    let brightness = map(energy,0,maxEnergy,70,255);

    for(let i=0;i<segments;i++){

        if(i<filled){

            fill(0,brightness,0);

        }else{

            noFill();

        }

        stroke(0,glow,0);

        rect(
            -128+i*26,
            -23,
            20,
            46
        );

    }

    //------------------------------------
    // Prozent
    //------------------------------------

    noStroke();

    fill(0,brightness,0);

    textSize(24);

    text(
        floor(energy)+"%",
        0,
        70
    );

    pop();

}

function mouseWheel(event){
updateScrollValue();
    energy += abs(event.delta)*0.03;

    energy = constrain(energy,0,maxEnergy);

    lastScroll = millis();
    return false;

}

function windowResized(){

    resizeCanvas(windowWidth,windowHeight);

}

// ===============================
// Scrollposition -> Server senden
// ===============================

let lastLetter = "";
let inactivityTimer;

// Scrollposition in A-M umwandeln
function getLetter(scrollPercent) {
  if (scrollPercent < 8) return "A";
  if (scrollPercent < 16) return "B";
  if (scrollPercent < 24) return "C";
  if (scrollPercent < 32) return "D";
  if (scrollPercent < 40) return "E";
  if (scrollPercent < 48) return "F";
  if (scrollPercent < 56) return "G";
  if (scrollPercent < 64) return "H";
  if (scrollPercent < 72) return "I";
  if (scrollPercent < 80) return "J";
  if (scrollPercent < 88) return "K";
  if (scrollPercent < 96) return "L";

  return 'M';
}

// Wert an den Server senden
function sendLetter(letter) {
  console.log("sendletter");

  if (letter === lastLetter) return;

  lastLetter = letter;

  fetch(`https://manuelmichel.de/set?scrollwert=${letter}`)
    .then(() => console.log("Gesendet:", letter))
    .catch(err => console.error(err));
}

// Wird bei jedem Scrollen ausgeführt
function updateScrollValue() {
console.log("scoll event listener");
  const scrollTop = window.scrollY;

 /* const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
console.log(screenTop + " " + maxScroll);
  const percent = (scrollTop / maxScroll) * 100;*/

  const letter = getLetter(energy);

  sendLetter(letter);

  // Inaktivität zurücksetzen
  clearTimeout(inactivityTimer);

  inactivityTimer = setTimeout(() => {
    sendLetter("A");
  }, 5000);
}

// Scroll-Event registrieren
//window.addEventListener("scroll", updateScrollValue);