window.onload = onLoadHtml;
var api_url = 'https://jsonplaceholder.typicode.com/posts/';
 function onLoadHtml(){
     getPosts();
 }

 function getPosts(){
     fetch(
         api_url,{
         method : 'GET'
         })
    .then(function(response){
        console.log(response);
        return response.json();
    }).then(callOnSucces);  
 }

 function callOnSucces(jsonResp){
console.log('Call on succes',jsonResp);
 }