let statekP = [0,0];
let pociski = [];
let shoot = true;
let lose = 0;
let spawn = true;
let przycisk;
let enemies = [];
let level = 0;
let zycie = 5;
let punkty = 0;

function moveEnemies(){
  for(let i of enemies){
    i[2] = i[2] - i[0];
    fill(25,25,25);
    circle(i[1],i[2],50);
    if(i[2] > 350){
      zycie -= 1;
      i.pop()
    }
  }
}

function drawPlr(x,y){
  
  circle(x,y,50);
}

function movePocisk(){
  for(let i of pociski){
    i[2] = i[2] - i[0];
    for(let i2 of enemies){
      if(dist(i[1],i[2], i2[1], i2[2]) <= 50){
        punkty += 1
        i2.pop();
      }
    }
    fill(255,0,0);
    circle(i[1]+35,i[2],15);
    if(i[2] < -25){
      i.pop();
    }
  }
}

function dupa(){
  zycie = 5;
  punkty = 0;
  pociski = []
  enemies = []
  przycisk.hide();
}

function setup() {
  createCanvas(400, 400);
  przycisk = createButton("OK:C")
  przycisk.position(200,200)
  przycisk.hide()
  przycisk.mousePressed(dupa);
}

function draw() {
  if(zycie > 0){
    textAlign(CENTER);
  background(220);
  textSize(20);
  textFont('arial');
  text("PUNKTY: " + punkty, 200,190);
  text("ZYCIA: " + zycie, 200,210);
  textSize(35);
  text("GG SHOOTER", 200,50);
  statekP[0] = mouseX;
  statekP[1] = 350;
  drawPlr(statekP[0],statekP[1]);
  rect(mouseX+25,330,10,30);
  movePocisk();
  moveEnemies();
  if(spawn == true){
    spawn = false
    if(level < 50){
      setTimeout(function(){enemies.push([-2,random(1,250),0]); spawn = true}, 500);
    }else if(level >= 50){
      setTimeout(function(){enemies.push([-5,random(1,250),0]); spawn = true}, 100);
    }else if(level >= 100){
      setTimeout(function(){enemies.push([-punkty/12,random(1,250),0]); spawn = true}, 100);
    }
  }
  
  fill(120);
  if(mouseIsPressed){
    if(shoot == true){
      shoot = false
      
      setTimeout(function(){pociski.push([10, statekP[0], statekP[1]]); shoot = true;},500)
      
    }
  }
  }else{
    textAlign(CENTER);
  background(220);
  textSize(20);
  textFont('arial');
  text("ALE NOOB !!!", 200,200);
    przycisk.show()
    
  }
}