var papiez;
let punkty = 0;
var song;
let ucieklo = 0;
let elements = [];
var dziecko = [];
var dzieckoimg;
let y = 280;

class Dziecko {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = random(1, 3);
  }
  move() {
    this.y = this.y;
    if (this.x <= 10) {
      this.x = 500;
      this.y = random(1, 290);
      this.speed = random(1, 3);
      ucieklo = ucieklo + 1;
    } else if (dist(this.x, this.y, 40, y) < 45) {
      this.x = 500;
      this.y = random(1, 290);
      this.speed = random(1, 3);
      punkty = punkty + 1;
    } else {
      this.x = this.x - this.speed;
    }
  }
  display() {
    image(dzieckoimg, this.x, this.y, 40, 40);
  }
}

function preload() {
  papiez = loadImage("papaj.gif");
  dzieckoimg = loadImage("kid.jfif");
  song = loadSound("pomarancze.mp3");
  for (i = 0; i < 5; i++) {
    dziecko[i] = new Dziecko(350, random(1, 290));
  }
  
}

function setup() {
  var elements = [];
function setup() {
  for(var i=0; i<10; i++){
    var elem = createElement('h1', '');
    elem.position(cos(map(i, 0, 10, 0, TWO_PI)) *300 +windowWidth/2,
      sin(map(i, 0, 10, 0, TWO_PI))*300 + windowHeight/2);
    
    elements.push(elem);
  }
  
}
  createCanvas(400, 400);
  song.play();
}

function draw() {
  background(220);
  image(papiez, 40, y, 50, 50);
  textAlign(CENTER);
  textFont("tahoma");
  for(var i=0; i<elements.length;i++){
    elements[i].html(frameCount);
  }
  textSize(20);
  text("Dzieci w piwnicy: " + punkty, 200, 30);
  text("Uciekinierzy: " + ucieklo, 200, 60);
  if (mouseIsPressed && y > 0) {
    y = y - 10;
  } else if (mouseIsPressed == false && y < 300) {
    y = y + 20;
  }
  square(-5, width - 40, 800);
  for (i = 0; i < 5; i++) {
    dziecko[i].display();
    dziecko[i].move();
  }
}
