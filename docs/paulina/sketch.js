

// Physische Maße als Verhältnisse 
const REEL_RATIO_W = 9;   // 9cm
const REEL_RATIO_H = 18;  // 18cm
const GAP_RATIO = 1.5;    // 1.5cm
const TOTAL_WIDTH_RATIO = 3 * REEL_RATIO_W + 2 * GAP_RATIO;
const TOTAL_HEIGHT_RATIO = REEL_RATIO_H;

// Feste Canvas-Größe für die Darstellung
const CANVAS_W = 2560;
const CANVAS_H = 1440;

// Logische Maße für die 90-Grad-Drehung (Breite und Höhe vertauscht)
const LOGICAL_W = CANVAS_H; // 1440
const LOGICAL_H = CANVAS_W; // 2560

// Arrays und Status-Variablen
let symbols = [];
let reels = [];
let spinning = false;

// Sound-Variable hinzufügen
let winSound;

// Globale Skalierungsvariablen
let reelW, reelH, gap, startX, startY, totalWidth;

function preload() {
  // Bilder laden
  symbols.push(loadImage("assets/zeit.png"));
  symbols.push(loadImage("assets/dino.png"));
  symbols.push(loadImage("assets/batterie.png"));
  symbols.push(loadImage("assets/blowup.png"));
  symbols.push(loadImage("assets/shrimp.png"));
  symbols.push(loadImage("assets/stunned.png"));
  symbols.push(loadImage("assets/666.png"));
  symbols.push(loadImage("assets/herz.png"));
  symbols.push(loadImage("assets/stern.png"));
  symbols.push(loadImage("assets/gehirn.png"));
  symbols.push(loadImage("assets/brille.png"));
  symbols.push(loadImage("assets/blitz.png"));


  
  // Sound laden (Stelle sicher, dass der Pfad stimmt)
  winSound = loadSound("assets/win.mp3");
}

function setup() {
  createCanvas(CANVAS_W, CANVAS_H);
  textAlign(CENTER, CENTER);
  
  calculateLayout();
  
  for(let i = 0; i < 3; i++) {
    reels.push(new Reel(startX + i * (reelW + gap), startY, reelW, reelH, symbols));
  }
}

function calculateLayout() {
  let scaleFactor = min(LOGICAL_W * 0.9 / TOTAL_WIDTH_RATIO, LOGICAL_H * 0.9 / TOTAL_HEIGHT_RATIO);
  
  reelW = REEL_RATIO_W * scaleFactor;
  reelH = REEL_RATIO_H * scaleFactor;
  gap = GAP_RATIO * scaleFactor;
  
  totalWidth = (3 * reelW) + (2 * gap);
  
  // Gewünschte physische Ziel-Koordinaten der oberen rechten Ecke
  const targetPhysX = 1880.9095;
  const targetPhysY = 85.0279;
  
  startX = targetPhysY; 
  startY = CANVAS_W - targetPhysX; 
}

function draw() {
  background(40);
  
  push(); 
  // 1. Ursprung exakt in die Mitte der physischen Fläche verschieben
  translate(CANVAS_W / 2, CANVAS_H / 2);
  
  // 2. Um 90 Grad im Uhrzeigersinn drehen 
  rotate(HALF_PI); 
  
  // 3. Ursprung für das Zeichnen auf die obere linke Ecke der gedrehten Logikfläche setzen
  translate(-LOGICAL_W / 2, -LOGICAL_H / 2);
  
  for(let reel of reels) {
    reel.update();
    reel.display();
  }
  
  pop(); 
}

function mousePressed() {
  if (spinning) return;
  spinning = true;
  
  let winChance = 0.35;
  let isWin = random(1) < winChance;
  
  let target1, target2, target3;
  
  if (isWin) {
    let winningSymbol = floor(random(symbols.length));
    target1 = winningSymbol;
    target2 = winningSymbol;
    target3 = winningSymbol;
  } else {
    target1 = floor(random(symbols.length));
    target2 = floor(random(symbols.length));
    target3 = floor(random(symbols.length));
    
    // Verhindern, dass zufällig doch ein Gewinn entsteht, wenn isWin false ist
    if (target1 === target2 && target2 === target3) {
      target3 = (target3 + 1) % symbols.length;
    }
  }
  
  reels[0].spin(target1, 1000); 
  reels[1].spin(target2, 2000); 
  reels[2].spin(target3, 3000); 
  
  // Wenn die letzte Walze stoppt, überprüfen wir, ob es ein Gewinn war
  setTimeout(() => { 
    spinning = false; 
    
    // Sound abspielen, wenn alle drei Bilder gleich sind
    if (isWin) {
      winSound.play();
    }
    
  }, 3000);
}

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

class Reel {
  constructor(x, y, w, h, symbolsList) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.symbolsList = symbolsList;
    
    this.currentPosition = floor(random(symbolsList.length)); 
    
    this.isSpinning = false;
    this.spinStartTime = 0;
    this.spinDuration = 0;
    this.startSpinPosition = 0;
    this.totalSpinDistance = 0;
  }
  
  resize(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  
  spin(targetIndex, duration) {
    this.isSpinning = true;
    this.spinStartTime = millis();
    this.spinDuration = duration;
    this.startSpinPosition = this.currentPosition;
    
    let currentInteger = floor(this.currentPosition);
    let currentOffset = this.currentPosition - currentInteger;
    
    let initialDistanceToTarget = (targetIndex - currentInteger + this.symbolsList.length) % this.symbolsList.length;
    
    this.totalSpinDistance = initialDistanceToTarget + this.symbolsList.length * 10 - currentOffset; 
    this.targetIndex = targetIndex;
  }
  
  update() {
    if (this.isSpinning) {
      let elapsedTime = millis() - this.spinStartTime;
      let progress = constrain(elapsedTime / this.spinDuration, 0, 1);
      
      let easedProgress = easeOutCubic(progress);
      
      this.currentPosition = this.startSpinPosition + this.totalSpinDistance * easedProgress;
      
      if (progress === 1) {
        this.isSpinning = false;
        this.currentPosition = this.targetIndex; 
      }
    }
  }
  
  display() {
    push(); 
    
    noStroke();
    beginShape();
    vertex(this.x, this.y);
    vertex(this.x + this.w, this.y);
    vertex(this.x + this.w, this.y + this.h);
    vertex(this.x, this.y + this.h);
    endShape(CLOSE);
    drawingContext.clip();
    
    fill(240);
    stroke(100);
    strokeWeight(4);
    rect(this.x, this.y, this.w, this.h); 
    
    let symbolHeight = this.h / 2.0; 
    let topY = this.y + this.h / 2 - this.currentPosition * symbolHeight;
    
    imageMode(CENTER);
    let imgDrawSize = symbolHeight * 1.25; 
    
    for (let i = floor(this.currentPosition) - 3; i <= floor(this.currentPosition) + 3; i++) {
      let symbolIndex = i % this.symbolsList.length;
      if (symbolIndex < 0) symbolIndex += this.symbolsList.length; 
      
      let symbolY = topY + i * symbolHeight;
      let currentImage = this.symbolsList[symbolIndex];
      
      image(currentImage, this.x + this.w / 2, symbolY, imgDrawSize, imgDrawSize);
    }
    
    noFill();
    stroke(0, 50);
    strokeWeight(8);
    rect(this.x, this.y, this.w, this.h);
    
    pop(); 
  }
}