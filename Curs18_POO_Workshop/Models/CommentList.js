function CommentList(){
    this.itemComents = [];
}

CommentList.prototype.fetchDataComment = function(id){
    var that = this;

    return $.ajax('https://jsonplaceholder.typicode.com/posts/'+id+'/comments/',{
        method : 'GET',
        success : function(response){
            for(var i = 0; i< response.length;i++){
                var commentItem = response[i];

                var comment = new Comment();

                comment.id = commentItem.id;
                comment.name = commentItem.name;
                comment.email = commentItem.email;
                comment.body = commentItem.body;
                comment.postId = commentItem.postId;

                that.itemComents.push(comment);

            }
        }
    });
}