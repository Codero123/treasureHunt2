var bg,bg2,form,system,code,security,secondlevel;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  system = new System()
  security = new Security()
  if (score === 3) {
    secondlevel = new Secondlevel()
  }
}

function draw() {

  if (score < 3) {
  background(bg);

  clues();
  security.display();
  push();
  textSize(20);
  fill("white");
  text("Score: " + score, windowWidth-900, windowHeight-700);
  pop();
  textSize(30);
  fill("white");
  text("RULES:", windowWidth-350, windowHeight-700);
  text("Answer all questions correctly to get to the", windowWidth-600, windowHeight-650);
  text("next stage. Finish all stages to get treasure.", windowWidth-600, windowHeight-600);
  }
  else if(score === 3) {
    background(bg)
    system = new System()
   secondlevel.show();
    level2Clues();
    push();
  textSize(20);
  fill("white");
  text("Score: " + score, windowWidth-900, windowHeight-700);
  pop();
  textSize(30);
  fill("white");
  text("RULES:", windowWidth-350, windowHeight-700);
  text("Answer all questions correctly to get to the", windowWidth-600, windowHeight-650);
  text("next stage. Finish all stages to get treasure.", windowWidth-600, windowHeight-600);
  }

  drawSprites()
}