function PostList(){
    this.items = [];
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
                that.items.push(postModel);

                //push the model in the array
            }
        },
        error : function(){
            alert("Something went wrong when fetching post!");
        }
    });
}