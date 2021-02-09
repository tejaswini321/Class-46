var gameState = 0;
var form,game,player,allPlayers;
var playerCount = 0;

function preload(){

}

function setup(){
    createCanvas(1200, 800);
    database=firebase.database();

    game = new Game();
    game.getState();
    game.start();

}

function draw(){
    if(playerCount === 2){
        gameState = 1;
        game.updateState(1);
    }
    if(gameState === 1){
        game.play();
    }
}