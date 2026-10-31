function setup () {
  createCanvas (windowWidth, windowHeight);
  background (245,235,215);
}

function draw () {
  nostroke();
  if (mouseX > width/2) {
    if (mouseY > height/2) {
      fill (220,30,30);
      } else {
        fill(250,200,0);
      }
  } else {
    if (mouseY > height/2) {
      fill (30,70,180);
      } else {
        fill(0);
      } 

    }
}

circle (mouseX, mouseY, random(10,40));