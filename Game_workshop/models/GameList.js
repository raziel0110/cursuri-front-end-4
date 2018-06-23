function GameList(){
    this.items = [];
}

GameList.prototype.fetchData = function(){
    var that = this;

    return $.ajax("https://games-world.herokuapp.com/games",{
        method : 'GET',
        success : function(response){
            for(var i = 0; i<response.length; i++){
              var gameItem = response[i];
              
              var gameModel = new Game();

              gameModel._id = gameItem._id;
              gameModel.title = gameItem.title;
              gameModel.imageUrl = gameItem.imageUrl;
              gameModel.description = gameItem.description;

              that.items.push(gameModel);
            }
        },
        error : function(){
            console.log('Something went wrong!');
        }
    });
}