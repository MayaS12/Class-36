class Player {
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){
            playerCountP = data.val();
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount: count
        })
    }

    update(name){
        var playerIndex = "player"+playerCountP;
        database.ref(playerIndex).set({
            name: name
        })
    }
}