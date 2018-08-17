let y = 0;
let sore = 0;

function setup() {
  createCanvas(400, 1000);
}

function draw() {
  background(0);
  ellipse(100, y, y, 100);
  fill(300, y, 100, 200);
  if (mouseX > width / 2) {
    y = y + 10;
  }
}
