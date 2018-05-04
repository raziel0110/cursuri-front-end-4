window.onload = onHtmlLoaded

function onHtmlLoaded(){
    getPosts();

    bindEvents();

}

function bindEvents(){
    var submit = document.getElementById('submit');
    submit.addEventListener('click',function(event){
        event.preventDefault();
        var title = document.getElementById('title').value;
        var body = document.getElementById('body').value;
        var id = document.getElementById('id_post').value;

        
        var data = {
           
            title :title,
            body : body
        }

        updatePost(id,data);

    });
}



function getPosts(){
 $.ajax('https://jsonplaceholder.typicode.com/posts', {
 method: 'GET',
 success: function(response){
    console.log(response);
    var html = "";
    var elPost = document.getElementById('list-post');
    for (var i=0; i<response.length; i++){
        var item = response[i];                                                  // recomandat de facut
        

        var elem = document.createElement('article');
        elem.innerHTML ='<h2>'+item.title + '</h2>'+
                         '<p>'+item.body + '</p>'+ 
        '<button class="btn_edit" data-edit-id="'+item.id +'">Edit Post</button> | <button data-delete-id="'+ item.id +'" class"btn_del" id="btn_del">Delete Post</button>';
        elPost.appendChild(elem);

        
        var edit = document.querySelector('[data-edit-id ="'+ item.id +'"]');
        edit.addEventListener('click',function(){
            // alert(item.id);
          var id = this.getAttribute('data-edit-id');
        //   alert(id);
          getPost(id);

        });

        var btn_del = document.querySelector('[data-delete-id ="'+ item.id +'"]');
        btn_del.addEventListener('click',function(){
            // alert(item.id);
          var nr_id = this.getAttribute('data-delete-id');
        //   alert(id);
            deletePost(nr_id);
        });
    
    }
}
}); 

}

function deletePost(id){
    $.ajax('https://jsonplaceholder.typicode.com/posts/'+id,{
    method:'DELETE',
    success : function(response){
        console.log("Delete new post",response);
    }
});
} 
    

function getPost(id){
    $.ajax('https://jsonplaceholder.typicode.com/posts/'+ id, {
 method: 'GET',
 success: function(response){
    console.log(response);
    console.log('Get title: ',response.title);
    console.log("Get body: ",response.body);
    var title = document.getElementById('title');
    var body =  document.getElementById('body');
    var id_post = document.getElementById('id_post');
    
    title.value = response.title;
    body.value = response.body;
    id_post.value = response.id;
    
    
 }
});
}

function updatePost(id,data){
    $.ajax('https://jsonplaceholder.typicode.com/posts/'+ id,{
    method:'PUT',
    data : data,// se salveaza ca obiect, nu mai conteaza ordinea
    success : function(response){
        console.log("Update new post",response);
    }
});
}










//========================= DELETE BY ME=============================
//     var btn_del = document.querySelectorAll('[data-id]');
//     for(var j=0; j<btn_del.length;j++){
//         var btn = btn_del[j];
//         var nr_id = j;
//         btn.addEventListener('click',function(event){
//             console.log(event.target.parentNode);
//             deletePost(nr_id);
//             elPost.removeChild(event.target.parentNode);
//         
//     }
    
//     }

   
    
//     });    
// }


// function deletePost(id){
//     $.ajax('https://jsonplaceholder.typicode.com/posts/'+id,{
//     method:'DELETE',
//     success : function(response){
//         console.log("Delete new post",response);
//     }
// });
// }   