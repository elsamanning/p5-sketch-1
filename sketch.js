
// SKETCH SETUP ------------------------------------------------
function setup() {
  createCanvas(1080,1080, WEBGL);
  angleMode(DEGREES);
}


// DRAW SKETCH -----------------------------
function draw() {
  background(250, 142, 81);
  //starting point for video capture (uncomment line 13 to capture video)
  //if (frameCount === 1) capturer.start();
  
  
  rotateX(60)
  noFill()
  //stroke(255)

  // COLORS --------------------------------------------------
  for (var i = 0; i < 50; i++) {
    var r = map(sin(frameCount / 2), -1, 1, 250, 240)
    var g = map(i, 0, 50, 106, 80)
    var b = map(cos(frameCount), -1, 1, 185, 41)
    stroke(r, g, b)

    rotate(frameCount / 20)


    beginShape()
    for (var j = 0; j < 200; j += 30) {
      var rad = i * 8
      var x = rad * cos(j)
      var y = rad * sin(j)
      var z = sin(frameCount * 2 + i * 10) * 10

      vertex(x, y, z)
    }
    endShape(CLOSE)
  }

  // uncomment lines 43-48 to capture video
  /*if (frameCount < 60 * 30) {
    capturer.capture(canvas);
  } else if (frameCount === 60 * 30) {
    capturer.save();
    capturer.stop();
  }*/
}