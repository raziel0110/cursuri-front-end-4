var commentsList = document.getElementById("comments-list");
console.log(commentsList);// null

window.addEventListener("load",onHtmlLoaded);// widow.addEventListener("load",function(){ .... });

function onHtmlLoaded(){
    var commentsList = document.getElementById("comments-list");
    console.log(commentsList);

    console.log("comments items", document.getElementsByClassName("comment-item"));
    console.log("comments-items",document.getElementsByTagName("section"));

    var commentItems = document.getElementsByClassName("comment-item");
    console.log("first item", commentItems[0]);
    console.log("second item", commentItems[1]);

    console.log("firt paragraph",document.querySelector("section > p"));
    var par = document.querySelector("section > p");
    par.innerHTML = "salut";

    console.log("all paragraph", querySelectorAll("section.comment-item > p"));
}



