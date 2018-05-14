window.onload = function(){
var currentPost  = new Post();
var currentPostId = getUrlParameter('postId');
console.log(currentPostId);

currentPost.fetchData(currentPostId).then(function(){
    var post_details = document.getElementById('post-details');
    var postTitleEl = document.createElement('h3');
    postTitleEl.innerHTML = currentPost.title;
    var postBodyEl = document.createElement('p');
    postBodyEl.innerHTML = currentPost.body;

    post_details.appendChild(postTitleEl);
    post_details.appendChild(postBodyEl);
    console.log(currentPost);
}).catch(function(){
    alert('nu-i bine');
});
/**
     * It retrieves a query (URL) parameter value
     * 
     * It expects you to send the parameter key(before '=')
     * **/
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    var comments = new CommentList();

    comments.fetchDataComment(currentPostId).then(function(){
        
        console.log(comments.itemComents);
        var post_comment = document.getElementById('post-comment');
        for(var i = 0;i< comments.itemComents.length;i++){
            var comment_item = comments.itemComents[i];

            var commentEmail = document.createElement('h4');
            var commentBody = document.createElement('p');

            commentEmail.innerHTML = comment_item.email;
            commentBody.innerHTML = comment_item.body;

        post_comment.appendChild(commentEmail);
        post_comment.appendChild(commentBody);
        }
        
    }).catch(function(){
        alert("II bai");
    });

}