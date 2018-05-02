window.onload = onHtmlLoaded

function onHtmlLoaded(){
    getPost();
}

function getPost(){
 $.ajax('https://jsonplaceholder.typicode.com/posts', {
 method: 'GET',
 success: function(response){
    console.log(response);
    var html = "";
    for (var i=0; i<response.length; i++){
        var item = response[i];                                                  // recomandat de facut
        html += '<article>'+
        '<h2>'+ item.title +'</h2>'+
        '<p>'+item.body+'</p>' +
        
        '<button class="btn_edit" data = "'+item.id +'">Edit Post</button> | <button data-id="'+ item.id +'" class"btn_del" id="btn_del">Delete Post</button>'+
        '</article>';

        
    
    }
    var elPost = document.getElementById('list-post');
    elPost.innerHTML = html;

    var btn_del = document.querySelectorAll('[data-id]');
    for(var j=0; j<btn_del.length;j++){
        var btn = btn_del[j];
        var nr_id = j;
        btn.addEventListener('click',function(event){
            console.log(event.target);
            deletePost(nr_id);
        });
    }
    
    }

   
    
    });    
}


function deletePost(id){
    $.ajax('https://jsonplaceholder.typicode.com/posts/1',{
        method : "DELETE",
        data : {
            userId : id
        },
        success : function(response){
            console.log("Post deleted",response);
        }
    });
}