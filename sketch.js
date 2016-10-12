var thefont; // global variable
var fsize = 16;
var insidecolor = 0;
var quotes = ["'There's nothing to fear but fear \n itself' - Franklin D. Roosevelt", "'Whatever you are, be a good one' - Abraham Lincoln", "'The future belongs to those who \n prepare for it today' - Malcolm X", "'If you can dream it, you can do it.' - Walt Disney"];
var currentquote = 0;


// fonts are like images... they need to be loaded
// asychronously in the preload() function:

function preload()
{
  thefont = loadFont('thefont.otf');
}

function setup() {
  createCanvas(800, 600);
  background(255);
  stroke(0);
  textFont(thefont, fsize);
}

function draw() {
  background(255);
  fill(insidecolor, 0, 0);
  text(quotes[currentquote], mouseX, mouseY);
  

  var s; // temporary variable for the text size
  var fcounter = 0; // this is a counter going through the available fonts
  
if (mouseX > 400 && mouseY > 400)  {
  currentquote = 0;
  //textFont(thefont[0], 36);
}

if (mouseX < 400 && mouseY < 400) {
  currentquote = 1;
  //textFont(thefont[1], 36);
}

if (mouseX > 400 && mouseY < 400) {
  currentquote = 2;
  //textFont(thefont[2], 36);
}

if (mouseX < 400 && mouseY > 400) {
  currentquote = 3;
  //textFont(thefont[3], 36);
}


}

