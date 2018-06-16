window.onload = function(){
    var current_game =  new Game();
    var curent_id = getUrlParameter('postId');
    console.log(curent_id);

    var takeTitle = document.getElementById('takeTitle');
    var takeDesc = document.getElementById('takeDesc');
    var submit = document.getElementById('submit');


    // * It retrieves a query (URL) parameter value
    // * 
    // * It expects you to send the parameter key(before '=')
    // * **/
   function getUrlParameter(name) {
       name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
       var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
       var results = regex.exec(location.search);
       return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
   };


   current_game.fetchData(curent_id).then(function(){
    var box = document.getElementById('game_detail');
    var title = document.createElement('h3');
    var image = document.createElement('img');
    var desc = document.createElement('p');
    var del = document.createElement('button');
    var update = document.createElement('button');
    var home = document.createElement('a');
    //var update = document.createElement('button');

    title.innerHTML = current_game.title;
    image.setAttribute('src',current_game.imageUrl);
    desc.innerHTML = current_game.description;
    del.setAttribute('id','del_btn');
    update.setAttribute('id','update_btn');
    
    del.innerHTML = 'Delete';
    update.innerHTML = 'Update';

    home.setAttribute('href','http://cursuri-albangabriel42247231.codeanyapp.com/Game_workshop/pages/index.html');
    home.innerHTML = 'Home';
    box.appendChild(title);
    box.appendChild(image);
    box.appendChild(desc);
    box.appendChild(del);
    
    box.appendChild(update);
    box.appendChild(home);

    del.addEventListener('click',()=>{
        current_game.deleteGame(curent_id);
        
    });

    update.addEventListener('click',function(){

        current_game.getGame(curent_id).then(function(){
            takeTitle.value = current_game.title;
            takeDesc.value = current_game.description;

            
            submit.addEventListener('click',function(e){
                e.preventDefault();
                var objUpdate = {
                    title : takeTitle.value,
                    imageUrl : current_game.imageUrl,
                    description : takeDesc.value
                }
                current_game.updateGame(curent_id,objUpdate).then(()=>{
                    window.location.href = 'http://cursuri-albangabriel42247231.codeanyapp.com/Game_workshop/pages/index.html';
                });
                

            });
            
        });
    });
 

    });

   

}