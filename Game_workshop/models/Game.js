function Game(){
    this._id = "";
    this.title = "";
    this.imageUrl = "";
    this.description = "";
}

Game.prototype.addGame = function(title,image,description) {
  // var that = this;
   return $.ajax('https://games-world.herokuapp.com/games',{
            method : 'POST',
            data : {
                title : title,
                imageUrl : image,
                description : description
            },
            success :function(response){
                console.log(response);
                this.title = response.title;
                this.imageUrl = response.imageUrl;
                this.description = response.imageUrl;

                window.location.reload(true);

            },
            error : () => {
                console.log('error adding game');
            }
        });
}

Game.prototype.deleteGame = function(id){
    var that = this;
    $.ajax('https://games-world.herokuapp.com/games/'+id,{
        method : 'DELETE',
        data : {
            _id : id
        },
        success : function(response){
            window.location.href = "http://cursuri-albangabriel42247231.codeanyapp.com/Game_workshop/pages/index.html";
        }
    });
}

Game.prototype.fetchData = function(id){
    var that = this;
    return $.ajax('https://games-world.herokuapp.com/games/'+id,{
        method : 'GET',
        success : function(data){
            that._id = data.id;
            that.title = data.title;
            that.imageUrl = data.imageUrl;
            that.description = data.description;
        },
        error : function(){
            console.log('errror');
        }
    }); 
}

Game.prototype.updateGame = function(id,obj){
    var that = this;
    return $.ajax('https://games-world.herokuapp.com/games/'+id,{
        method : 'PUT',
        data : obj,
        success : function(response){

        }
    });

}


Game.prototype.getGame = function(id){
    var that = this;

    return $.ajax('https://games-world.herokuapp.com/games/'+id, {
        method : 'GET',
        success : function(data){
            that._id = data.id;
            that.title = data.title;
            that.description = data.description;
        }
    });
}