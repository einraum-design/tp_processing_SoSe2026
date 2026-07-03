let icons = [];
const numIcons = 6;

let focusIndex = -1;

function preload() {
  for (let i = 0; i < numIcons; i++) {

    icons.push({
      img: loadImage(`images/icon${i + 1}.png`),
      sound: loadSound(`audio/audio${i + 1}.mp3`),

      x: random(width),
      y: random(height),

      vx: random(-0.8, 0.8),
      vy: random(-0.8, 0.8),

      baseSize: 350,
      size: 350,

      alpha: 255,
      targetAlpha: 255,

      state: "idle",

      wobbleT: random(1000)
    });
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
}

function draw() {

  background("#f0e7d2");

  // =========================
  // MINDESTENS 4 SICHTBAR
  // =========================
  let visibleCount = icons.filter(i => i.alpha > 50).length;

  if (visibleCount < 4 && focusIndex === -1) {
    for (let icon of icons) {
      icon.targetAlpha = 255;
    }
  }

  // =========================
  // UPDATE ICONS
  // =========================
  for (let i = 0; i < icons.length; i++) {

    let icon = icons[i];

    // -------------------------
    // FADE
    // -------------------------
    icon.alpha += (icon.targetAlpha - icon.alpha) * 0.05;

    // -------------------------
    // NORMAL MOVEMENT
    // -------------------------
    if (icon.state !== "focus") {
      icon.x += icon.vx;
      icon.y += icon.vy;
    }

    // -------------------------
    // BORDER COLLISION
    // -------------------------
    let r = icon.size / 2;

    if (icon.x < r) { icon.x = r; icon.vx *= -1; }
    if (icon.x > width - r) { icon.x = width - r; icon.vx *= -1; }
    if (icon.y < r) { icon.y = r; icon.vy *= -1; }
    if (icon.y > height - r) { icon.y = height - r; icon.vy *= -1; }

    // -------------------------
    // FOCUS MODE
    // -------------------------
    if (icon.state === "focus") {

      let cx = width / 2;
      let cy = height / 2;

      icon.x += (cx - icon.x) * 0.08;
      icon.y += (cy - icon.y) * 0.08;

      icon.wobbleT += 0.02;

      icon.x += sin(icon.wobbleT) * 2;
      icon.y += cos(icon.wobbleT) * 2;

      icon.size += (600 - icon.size) * 0.05;

    } else {
      icon.size += (350 - icon.size) * 0.05;
    }

    // -------------------------
    // OTHER ICONS FADE OUT
    // -------------------------
    if (focusIndex !== -1 && i !== focusIndex) {
      icon.targetAlpha = 40;
    } else if (focusIndex === -1) {
      icon.targetAlpha = 255;
    }
  }

  // =========================
  // REPULSION (KEIN ÜBERLAPPEN)
  // =========================
  for (let i = 0; i < icons.length; i++) {
    for (let j = i + 1; j < icons.length; j++) {

      let a = icons[i];
      let b = icons[j];

      let dx = b.x - a.x;
      let dy = b.y - a.y;

      let distVal = sqrt(dx * dx + dy * dy);
      let minDist = (a.size + b.size) * 0.4;

      if (distVal < minDist && distVal > 0) {

        let overlap = (minDist - distVal) * 0.03;

        let nx = dx / distVal;
        let ny = dy / distVal;

        a.x -= nx * overlap;
        a.y -= ny * overlap;

        b.x += nx * overlap;
        b.y += ny * overlap;
      }
    }
  }

  // =========================
  // DRAW
  // =========================
  for (let icon of icons) {
    push();
    tint(255, icon.alpha);
    image(icon.img, icon.x, icon.y, icon.size, icon.size);
    pop();
  }
}

function checkInteraction(px, py) {

  if (focusIndex !== -1) return;

  for (let i = 0; i < icons.length; i++) {

    let icon = icons[i];

    let d = dist(px, py, icon.x, icon.y);

    if (d < icon.size / 2) {

      focusIndex = i;
      icon.state = "focus";

      console.log(icon.sound);

      icon.sound.stop();
      icon.sound.play();
      console.log(icon.sound);

      icon.sound.onended(() => {

        icon.state = "idle";
        focusIndex = -1;

        for (let ic of icons) {
          ic.targetAlpha = 255;
        }
      });

      break;
    }
  }
}

function mousePressed() {
  checkInteraction(mouseX, mouseY);
}

function touchStarted() {
  checkInteraction(mouseX, mouseY);
  return false;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}