window.onload = onLoadHtml
apiUrlIp = 'https://api.ipdata.co';
apiUrlJokes = 'http://api.icndb.com/jokes/';

function onLoadHtml(){
    getJokes(); 
    getMyIp();  
    // addJoke();
    document.getElementById('input_joke').value = "";
}

function getJokes(){
    fetch(
        apiUrlJokes,{
        method : 'GET'    
        }).then(function(response){
            return response.json();
        }).then(callOnSuccesJokes)
}

function callOnSuccesJokes(response){
    console.log(response.value);
    var post = document.getElementById('post_list');
            for (var i = 0; i < response.value.length ; i++ ){ 
            
                var item =  response.value[i];   
                
                var element = document.createElement('article');
                var buttons = document.createElement('div');
                element.setAttribute('article-id',item.id);
                buttons.innerHTML = '<button data-edit-id="'+item.id +'" class="btn-type">Edit</button> | <button data-delete-id="'+item.id+'" class="btn-type">Delete</button>';
                buttons.classList.add('buttons');
                
                
                element.classList.add('joke');
                element.innerHTML = '<p><span>'+ (i+1) +'. </span>'+ item.joke +'</p>';
                element.appendChild(buttons);
                post.appendChild(element);
                
                buttons.style.display = "none";

                element.addEventListener('click',function(e){
                    console.log(this.lastChild); 
                  
                  var el = this.lastChild;
                   if(el.style.display === "none"){
                    el.style.display = "block";
                    
                   }
//                   else {
//                      buttons.style.display = "none";
//                    }
//                    } else {
//                     el.style.display = "none";
//                     buttons.style.display = "none";
//                    }
                    
                });

            }
        }
function getMyIp(){
   fetch(
    apiUrlIp,{
    method : 'GET'
    })
    .then(function(response){
        return response.json();
    }).then(callOnSuccesIp)
}          
            
            
    
 function callOnSuccesIp(response){           
            
    var post = document.getElementById('ip_post');
    

    post.innerHTML = '<p> Your Ip: '+ response.ip +'</p>'+
                    '<p>Your City : '+ response.city + ' </p>'+
                    '<p>Latitude:'+response.latitude +' + Longitude :'+response.longitude+'</p>';

 }


function addJoke(){
    var save = document.getElementById('btn_submit');
    save.addEventListener('click', function(e){
        e.preventDefault();
        
        var joke_insert = document.getElementById('input_joke');
        fetch(
            apiUrlJokes,{
                method:'POST',
                body : JSON.stringify({
                    id : 1,
                    joke : joke_insert.value 
                })
            }).then(function(response){
                return response.json();
            }).then(successAddJoke)
    });
    }

function successAddJoke(response){
    console.log("Joke inserted",response);
}

        // $.ajax('http://api.icndb.com/jokes/',{
        //     method : 'POST',
        //     value : {
        //         id : 1,
        //         joke : joke.value
        //     },
        //     success : ,function(response){
        //         console.log("Joke inserted!",response);
        //         joke.value = "";

        //     }

        // });

    