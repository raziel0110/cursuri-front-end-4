window.onload = function(){
    var add_btn = document.getElementById('add_game');
    var game_title = document.getElementById('game_title');
    var image = document.getElementById('image_url');
    var description = document.getElementById('game_description');
    

    var games = new GameList();

    games.fetchData().then(function(){
        var container = document.getElementById('container');
        for(var i = 0; i < games.items.length; i++){
            var game = games.items[i];

            var  gameEl =  document.createElement('article');
            //gameEl.setAttribute('href','file:///C:/Users/Maverick/Desktop/tema/pages/index.html')

            var gameTitle = document.createElement('h3');
            var ancor = document.createElement('a');
            var gameImage = document.createElement('img');
           
            
            ancor.setAttribute('href','http://cursuri-albangabriel42247231.codeanyapp.com/Game_workshop/pages/game.html?postId=' + game._id);
            gameImage.setAttribute('src',game.imageUrl);
            ancor.appendChild(gameImage);
            gameTitle.innerHTML = game.title;
            gameEl.appendChild(gameTitle);
            gameEl.appendChild(ancor);

            container.appendChild(gameEl);



        }
    }).catch(function(){
        console.log("Eror disply games items");
    });
    
    add_btn.addEventListener('click',function(e){
        e.preventDefault();
        var container = document.getElementById('container');

        var newgame = new Game();

        newgame.title = game_title.value;
        newgame.imageUrl = image.value;
        newgame.description = description.value;
        console.log(newgame);
        newgame.addGame(game_title.value,image.value,description.value).then(function(){
            //container.appendChild('<article><h3>'+ game_title.image +'</h3><img src="'+image.value +'"><button id="btn_del">Delete</button></article>');
            let article = document.createElement('article');
            let title = document.createElement('h3');
            
            let image = document.createElement('img');
            image.setAttribute('src',newgame.imageUrl);


            article.appendChild(title);
            article.appendChild(image);
            container.appendChild(article);
            
        }).catch(function(){
            console.log('errrorrrr');
        });

        // $.ajax('https://games-world.herokuapp.com/games',{
        //     method : 'POST',
        //     data : newgame,
        //     success : function(element){
        //         console.log(element);
        //         container.appendChild('<article><h3>'+element.title +'</h3><img src="'+element.imageUrl +'"></article>');
        //     },
        //     error :  function(){
        //         console.log('eror');
        //     }
        // });
        game_title.value = "";
        image.value = "";
        description.value = "";
    });
}
// refresh auto la pagina cu elemente...
// prima data cream un obiect cu gamelist
//cu array gol de element
//dupa care facem get la server pentru elemente
