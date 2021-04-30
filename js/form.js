class Form{
    constructor(){

        this.title= createElement('h3', 'Car Racing Game');
        this.title.position(windowWidth/2, windowHeight/2-150);

        this.input= createInput('Name');
        this.input.position(windowWidth/2, windowHeight/2-50);

        this.button= createButton('Play');
        this.button.position(windowWidth/2, windowHeight/2);
    }

    display(){
       
        this.button.mousePressed(
            ()=>{
                this.input.hide();
                this. button.hide();
                player.name= this.input.value();
                this.greeting1= createElement('h3');
                this.greeting1.html("Hello "+ player.name);
                this.greeting1.position(windowWidth/2, windowHeight/2);

                this.greeting2= createElement('h4', 'Wait For Other Players To Join');
                this.greeting2.position(windowWidth/2, windowHeight/2+50);

                playerCount=playerCount+1;
                player.index=playerCount;
                player.update();
                player.updateCount(playerCount);
            }
        )
    }
}