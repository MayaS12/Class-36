class Form {
    constructor(){

    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game!");
        title.position(515,100);
        var input = createInput("name");
        input.position(530,300);
        var button = createButton("play");
        button.position(585,350);

        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCountP = playerCountP+1
            player.updateCount(playerCountP);
            player.update(name);

            var greeting = createElement("h3");
            greeting.html("Hello "+name);
            greeting.position(550,300);
        })
    }
}