function PostList(){
    this.items = [];

    //this.item -> e o proprietate pe this si va fi accesata dinafara functiei,daca va fi o variabila va fi accesata doar in interierorul functiei
}

PostList.prototype.fetchData = function(){
    var that = this;
    return $.ajax('https://jsonplaceholder.typicode.com/posts',{
        method: 'GET',
        success : function(postsData){
            for(var i = 0; i< postsData.length;i++){
                var postItem = postsData[i];
                var postModel = new Post();
                //set all the data the we receive form server
                //on the post model
                postModel.id = postItem .id;
                postModel.title = postItem.title;
                postModel.body = postItem.body;
                postModel.userId = postItem.userId;

                //push the model in the array
                that.items.push(postModel);
            }
        },
        error : function(){
            alert("Something went wrong when fetching post!");
        }
    });
}