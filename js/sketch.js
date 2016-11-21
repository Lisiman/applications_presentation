var theCanvas = function(p) {
  p.setup = function() {
    p.createCanvas(100, 100);
    p.background(255, 0, 0);
  }
  p.draw = function() {
    p.background(p.random(255), 0,0);
  }
};

new p5(thecanvas, "theCanvas");
