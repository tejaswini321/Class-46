class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on('value',(data)=>{
            gameState = data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player= new Player();
            var playerCountRef= await database.ref('playerCount').once("value");

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        console.log("play Function");

        Player.getPlayerInfo();
        var index = 1

        for(var plr in allPlayers){
            
            text("Name: "+allPlayers[plr].name, 500, 200*index);
            index++;

        }

    }
}