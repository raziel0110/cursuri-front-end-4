var commentsList = document.getElementById("comments-list");
console.log(commentsList);// null

window.addEventListener("load",onHtmlLoaded);// widow.addEventListener("load",function(){ .... });

function onHtmlLoaded(){

// finding elements

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

    console.log("all paragraph", document.querySelectorAll("section.comment-item > p"));

// Updating elements

    var h1Array = document.getElementsByTagName('h1');// returns an array anytime
    console.log(h1Array[0].innerHTML);// ca sa afiseze continutul primului element din array punem indicele=>[0]

    var h1 = document.querySelector('h1');// return the first element that matches
    console.log(h1);

    h1.innerHTML = "JS DOM MANIPULATION MODIFIED";


// get and set attributes

    var list = document.getElementById("comments-list");
    console.log("Element id:",list.id, list.getAttribute("id")); // manipularea unui ID a unui element
    
    list.id = "comment-list-new-id";// modificarea unui ID
    list.setAttribute("id","comments-list-new");// modificare unui ID -> recommanded

    list.style.border ="solid 1px red";// modificarea borderului se face cu functi=> style
    list.style.padding = "5px";

// Adding or Removing Dom Elements 

    // create element
    var comment = document.createElement("section");// create a new section
    comment.className = "comment-item";//set the class on this element
    var commentClassList = comment.classList;
    commentClassList.add("second-comment-item");

    comment.innerHTML = "<h2>Gabi</h2><p>Comment from</p>";

    // add to the page

    list.appendChild(comment);

    // remove to the page

    var anaCommnet = document.querySelector('.comment-item');
    list.removeChild(anaCommnet);
    console.log(comment.children);// afiseaza copiii 
    console.log(comment.querySelector('p'));// traversare de DOM
 

    // =================================== EVENTS ==============================================
    // 2 metode

          

    var submitBtn = document.getElementById('btn-submit');

    submitBtn.addEventListener('click',function(event){
        event.preventDefault();// stop the execution and execute de follow lines
        console.log(event.target);// target the element that was clicked
    });
// =====>>>>> Sau <<<<<=======
    submitBtn.addEventListener('click',handlerClick);

    function handlerClick(event){
        event.preventDefault();// stop the execution and execute de follow lines
        console.log(event.target);// target the element that was clicked
    }

    

}



