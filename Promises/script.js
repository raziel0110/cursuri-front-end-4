window.onload = onLoadHtml;

function onLoadHtml(){
    getPosts();
}

function getPosts(){
    $.ajax('https://jsonplaceholder.typicode.com/posts',{
        method : 'GET',
        success : function(response){
            console.log("List =",response);
            for(var i=0;i<response.length;i++){
                var post = response[i];
                $.ajax('https://jsonplaceholder.typicode.com/posts/'+ post.id +'/comments',{
                    success:function(comments){
                        console.log('comments',comments);
                        
                    }
                });
            }
        }
    });
}