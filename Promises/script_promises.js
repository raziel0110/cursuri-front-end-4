window.onload = onLoadHtml;
var api_url = 'https://jsonplaceholder.typicode.com/posts/';
 function onLoadHtml(){
     getPosts();
 }

 function getPosts(){
    $.ajax('https://jsonplaceholder.typicode.com/posts')
    .then(callOnSuccess,callOnError)
    .then(function(post){
        console.log('The 10 posts are :',post);
        for(var i = 0;i<post.length;i++){
            var postsss = post[i];
           $.ajax(api_url + postsss.id +'/comments').then(callSuccesComments);
        }
    });
   
 }

 function callOnSuccess(response){
     console.log('Success = ', response);
     var post = response.slice(0,10);
     console.log('POST = ',post);
     return post;
 }

 function callOnError(xhr){
     console.log('Error = ', xhr);

     var container = document.getElementById('list_post');
     container.innerHTML = 'Cannot get post! '+ xhr.status;//status afiseaza nr de eroare
 }

 function callSuccesComments(data){
     console.log('Comments',data);
 }