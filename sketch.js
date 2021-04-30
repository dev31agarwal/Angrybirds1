var database, form, gameState=0, playerCount=0;
var player, allPlayers;
var car0,car1,car2,car3,cars;

function preload(){

  carImage1= loadImage("images/car1.png");
  carImage2= loadImage("images/car2.png");
  carImage3= loadImage("images/car3.png");
  carImage4= loadImage("images/car4.png");
  trackImage= loadImage("images/track.png");
}

function setup(){

  database = firebase.database();
  console.log(database);
  createCanvas(windowWidth-10, windowHeight-10);

 game= new Game();
 game.start();
}

function draw(){
  if(playerCount===4){
    gameState=1;
    game.updateState(1);
  }

  if(gameState===1){
    game.play();
  }
}
