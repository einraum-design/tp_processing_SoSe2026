let energy = 0;
let lastScroll = 0;
let lastTouchY = 0;

const maxEnergy = 100;

let lastLetter = "";
let inactivityTimer;

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
        energy -= 1.5;
    }

    energy = constrain(energy, 0, maxEnergy);

    //------------------------------------
    // Farben
    //------------------------------------

    let glow = map(energy, 0, maxEnergy, 120, 255);

    stroke(0, glow, 0);

    //------------------------------------
    // Rahmen
    //------------------------------------

    strokeWeight(3);
    noFill();

    rect(15, 15, width - 30, height - 30);

    //------------------------------------
    // Header
    //------------------------------------

    noStroke();
    fill(0, 255, 0);

    rect(30, 30, 270, 38);

    fill(0);

    textSize(18);
    textAlign(CENTER, CENTER);

    text("platunie v.1. alpha", 165, 49);

    //------------------------------------
    // Anzeige
    //------------------------------------

    if (energy < 1) {

        fill(0, 255, 0);

        textSize(34);

        text(
            "SCROLL TO GIVE LIFE-DATA",
            width / 2,
            height / 2
        );

    } else {

        drawBattery();

    }

}

function drawBattery() {

    push();

    translate(width / 2, height / 2);

    let glow = map(energy, 0, maxEnergy, 80, 255);

    stroke(0, glow, 0);

    strokeWeight(4);

    noFill();

    //------------------------------------
    // Batterie
    //------------------------------------

    rect(-140, -35, 280, 70);

    rect(140, -12, 18, 24);

    //------------------------------------
    // Segmente
    //------------------------------------

    let segments = 10;

    let filled = floor(
        map(energy, 0, maxEnergy, 0, segments)
    );

    let brightness = map(energy, 0, maxEnergy, 70, 255);

    for (let i = 0; i < segments; i++) {

        if (i < filled) {

            fill(0, brightness, 0);

        } else {

            noFill();

        }

        stroke(0, glow, 0);

        rect(
            -128 + i * 26,
            -23,
            20,
            46
        );

    }

    //------------------------------------
    // Prozent
    //------------------------------------

    noStroke();

    fill(0, brightness, 0);

    textSize(24);

    textAlign(CENTER, CENTER);

    text(
        floor(energy) + "%",
        0,
        70
    );

    pop();

}

// ======================================================
// Gemeinsame Funktion für alle Eingabegeräte
// ======================================================

function addEnergy(amount) {

    energy += amount;

    energy = constrain(energy, 0, maxEnergy);

    lastScroll = millis();

    updateScrollValue();

}

// ======================================================
// Maus + Touchpad
// ======================================================

function mouseWheel(event) {

    addEnergy(abs(event.delta) * 0.03);

    return false;

}

// ======================================================
// Touchscreen (Handy / Tablet)
// ======================================================

function touchStarted() {

    if (touches.length > 0) {
        lastTouchY = touches[0].y;
    }

    return false;

}

function touchMoved() {

    if (touches.length > 0) {

        let dy = abs(lastTouchY - touches[0].y);

        addEnergy(dy * 0.2);

        lastTouchY = touches[0].y;

    }

    return false;

}

function touchEnded() {

    return false;

}

function windowResized() {

    resizeCanvas(windowWidth, windowHeight);

}

// ======================================================
// Scrollposition -> Buchstaben A-M
// ======================================================

function getLetter(value) {

    if (value < 8) return "A";
    if (value < 16) return "B";
    if (value < 24) return "C";
    if (value < 32) return "D";
    if (value < 40) return "E";
    if (value < 48) return "F";
    if (value < 56) return "G";
    if (value < 64) return "H";
    if (value < 72) return "I";
    if (value < 80) return "J";
    if (value < 88) return "K";
    if (value < 96) return "L";

    return "M";

}

// ======================================================
// Server senden
// ======================================================

function sendLetter(letter) {

    if (letter === lastLetter) return;

    lastLetter = letter;

    console.log("Gesendet:", letter);

    fetch(`https://manuelmichel.de/set?scrollwert=${letter}`)
    .then(() => console.log("Gesendet:", letter))    
    .catch(err => console.error(err));

}

// ======================================================
// Energie in Buchstaben umwandeln
// ======================================================

function updateScrollValue() {
  console.log("scoll event listener");

    const letter = getLetter(energy);

    sendLetter(letter);

    clearTimeout(inactivityTimer);

    inactivityTimer = setTimeout(() => {

        sendLetter("A");

    }, 1000);

}