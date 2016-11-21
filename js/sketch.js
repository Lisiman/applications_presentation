//p5 canvas in instance mode
//very cool yay

var theCanvas = function(p) {
  p.setup = function() {
    p.createCanvas(100, 100);
    p.background(255, 0, 0);
  }
  p.draw = function() {
    //p.background(p.random(255), 0,0);
  }
};

new p5(theCanvas, "theCanvas");

//retrieve the canvas by id and then hide it with css
var myCanvas = document.getElementById("theCanvas");


//boolean variable for state of showing or hiding canvas
var canvasVisible = false;

//callback to the toggleDisplayCanvas in order
//to hide or show canvas with every click on the website
document.addEventListener("click", toggleDisplayCanvas);


//declaration of function toggleDisplayCanvas
function toggleDisplayCanvas() {
  if (canvasVisible) {
      myCanvas.style.visibility = "hidden";
  } else {
    myCanvas.style.visibility = "visible";
  }
  canvasVisible = !canvasVisible;
}
