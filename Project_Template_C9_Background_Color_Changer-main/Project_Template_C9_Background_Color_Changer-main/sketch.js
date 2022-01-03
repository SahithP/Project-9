var btn_red;
var btn_green;
var btn_black;
var btn_yellow;
var btn_blue;

var r = 0;
var g = 0;
var b = 0;

function red_bg()
{
 background("red")
}

function green_bg()
{
  background("green")
}
function yellow_bg()
{
 background("yellow")
}

function black_bg()
{
  background("black")
}
function blue_bg()
{
  background("blue")
}

function setup() {
  createCanvas(400, 400);  
  background("black");

  btn_red = createButton("Red");
  btn_red.position(50,100);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("Green");
  btn_green.position(300,100);
  btn_green.mousePressed(green_bg);

  btn_yellow = createButton("Yellow");
  btn_yellow.position(50,300);
  btn_yellow.mousePressed(yellow_bg);

  btn_black = createButton("Black");
  btn_black.position(300,300);
  btn_black.mousePressed(black_bg);

  btn_blue = createButton("Blue");
  btn_blue.position(175,200);
  btn_blue.mousePressed(blue_bg);
}

function draw() {


}

