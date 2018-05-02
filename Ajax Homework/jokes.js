window.onload = onLoadHtml

function onLoadHtml(){
    getJokes(); 
    getMyIp();  
    addJoke();
    document.getElementById('input_joke').value = "";
}

function getJokes(){
    $.ajax('http://api.icndb.com/jokes/',{
        method : 'GET',
        success : function(response){
            var post = document.getElementById('post_list');
            var jokes = response.value;

            for (var i = 0; i < jokes.length ; i++ ){ 
            
                var item =  jokes[i];   
                var element = document.createElement('article');
                var buttons = document.createElement('div');
                element.setAttribute('article-id',item.id);
                buttons.innerHTML = '<button data-edit-id="'+item.id +'">Edit</button> | <button data-delete-id="'+item.id+'">Delete</button>';
                
                
                element.classList.add('joke');
                element.innerHTML = '<p><span>'+ (i+1) +'. </span>'+ item.joke +'</p>';
                element.appendChild(buttons);
                post.appendChild(element);
                
                buttons.style.display = "none";

                element.addEventListener('click',function(e){
                   //console.log(this.lastChild); 
                   var el = this.lastChild;
                   if(el.style.display === "none"){
                    el.style.display = "block";
                   } else {
                    el.style.display = "none";
                   }
                    
                });

            }
        }
    });
}
function getMyIp(){
    $.ajax('https://api.ipdata.co',{
        method:'GET',
        success : function(response){
            var post = document.getElementById('ip_post');
            

            post.innerHTML = '<p> Your Ip: '+ response.ip +'</p>'+
                            '<p>Your City : '+ response.city + ' </p>'+
                            '<p>Latitude:'+response.latitude +' + Longitude :'+response.longitude+'</p>';

        } 
    });
}

function addJoke(){
    var save = document.getElementById('btn_submit');
    save.addEventListener('click', function(e){
        e.preventDefault();
        
        var joke = document.getElementById('input_joke');

        $.ajax('http://api.icndb.com/jokes/',{
            method : 'POST',
            value : {
                id : 1,
                joke : joke.value
            },
            success : function(response){
                console.log("Joke inserted!",response);
                joke.value = "";

            }

        });

    });
}