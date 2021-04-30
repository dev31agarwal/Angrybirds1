class Player{
    constructor(){
        this.name=0;
        this.distance=0;
        this.index=0;

    }

    getCount(){
        database.ref('playerCount').on("value", 
        function(data){
            playerCount= data.val();
        })
    }

    updateCount(x){
        database.ref('/').update({
            playerCount:x
        })
    }

    update(){

        var playerIndex="Players/player"+player.index;
        database.ref(playerIndex).update({
            distance: this.distance,
            name: this.name,
    })
}

getPlayerInfo(){
    database.ref('players').on("value", (data)=>{
        allPlayers= data.val()
    })
}
}