window.onload = onHtmlLoaded;

function onHtmlLoaded(){

var nameElement = document.querySelector('input[name="name"]');
var contentElement = document.querySelector('[name="content"]');

var form = document.querySelector('form');


form.addEventListener('submit', function(event){
    event.preventDefault();
    addComment(nameElement.value,contentElement.value);
    nameElement.value = "";
    contentElement.value = "";
});



}

function addComment(name,content){
    console.log(name,content);

    var section = document.createElement("section");
    section.classList.add("comment-item");
    

    var h2 = document.createElement("h2");
    h2.innerHTML = name;
    section.appendChild(h2);

    var p = document.createElement("p");
    p.innerHTML = content;
    section.appendChild(p);

    var button = document.createElement("button");
    button.setAttribute("name","remove");
    button.innerHTML ="X";
    section.appendChild(button);

    button.addEventListener('click',function(event){
        console.log(event.target);

        var killedParent = event.target.parentElement;
        list.removeChild(killedParent);
    });

    var list = document.getElementById("comments-list");
    list.appendChild(section);



}