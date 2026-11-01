function setup () {
  createCanvas (windowWidth, windowHeight);
  background (245,235,215);
}

function draw() {
  noStroke();
  if (mouseX < width /2) {
    if (mouseY < height / 2) {
      fill(253, 195, 10);
    } else {
      fill(27, 18, 4);
    }
  } else {
    if (mouseY < height / 2) {
      fill(24, 48, 120);
    } else {
      fill(214, 62, 23);
    }
  }
  circle (mouseX, mouseY, random(10,50));

if (mouseIsPressed) {
    stroke(0);
    strokeWeight(3);
    line(mouseX - 25, mouseY, mouseX + 25, mouseY);
    line(mouseX, mouseY - 25, mouseX, mouseY + 25);
    line(mouseX - 18, mouseY - 18, mouseX + 18, mouseY + 18);
    line(mouseX - 18, mouseY + 18, mouseX + 18, mouseY - 18);
  }
}
  function keyPressed() {
  if (key == ' ') {
    background(245, 235, 215);
  }
}
 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}