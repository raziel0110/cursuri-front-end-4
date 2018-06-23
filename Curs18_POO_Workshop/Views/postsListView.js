window.onload = function(){
var posts = new PostList();
posts.fetchData().then(function(){
    var container = document.getElementById('container');
    for(var i = 0; i < posts.items.length; i++){
        var postEl = document.createElement('a');
        postEl.setAttribute('href','http://cursuri-albangabriel42247231.codeanyapp.com/Curs18_POO_Workshop/Pages/home.html?postId='+posts.items[i].id);
        postEl.setAttribute('target','blank');
        postEl.innerHTML = posts.items[i].title;
        container.appendChild(postEl);
    }

}).catch(function(){
    console.log("Hope not");
});
}