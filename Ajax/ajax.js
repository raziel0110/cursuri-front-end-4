// GET ONE POST
// $.ajax('https://jsonplaceholder.typicode.com/posts/1', {
//  method: 'GET',
//  success: function(response){
//     console.log('Get title: ',response.title);
//     console.log("Get body: ",response.body);
//  }
// });

$.ajax('https://jsonplaceholder.typicode.com/posts', {
 method: 'GET',
 success: function(response){
    console.log(response);
    // console.log('Get title: ',response.title);
    // console.log("Get body: ",response.body);
    for (var i=0; i<response.length; i++){
        var item = response[i];                                                  // recomandat de facut
        console.log('Title :', item.title);
        console.log('Body :', item.body);

    }
 }
});

// CREATE NEW POST
$.ajax('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    data : {
        userId : 1,
        title : "New Post",
        body : "New post Body",
    },
    success : function(response){
        console.log("create new post",response);
    }
});

//UPDATE => PUT

$.ajax('https://jsonplaceholder.typicode.com/posts/1',{
    method:'PUT',
    data : {
        userId : 1,
        title : "Update Post 1",
        body : "Update post",
    },
    success : function(response){
        console.log("Update new post",response);
    }
});

//DELETE 
$.ajax('https://jsonplaceholder.typicode.com/posts/1',{
    method:'DELETE',
    data : {
        userId : 1
    },
    success : function(response){
        console.log("Delete new post",response);
    }
});

$.ajax('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    data : {
        userId : 2,
        title : "New Post",
        body : "New post Body",
        comment : "my comment"
    },
    success : function(response){
        console.log("create new post",response);
    },

    error : function(){
        alert('create post error');
    }
});

$.ajax('https://jsonplaceholder.typicode.com/posts/1/comments',{
    method:'GET',
    success : function(response){
        console.log("comment",response.comment);
    }
});


