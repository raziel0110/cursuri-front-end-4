// get value
var item_title = document.getElementById('item_title');
var item_details = document.getElementById('item_details');
var list = document.getElementById('list_body');

// button
var btn_add = document.getElementById('btn_add');


//when click button to add
btn_add.addEventListener('click', addToList);
function addToList(){
    insertItem(item_title.value,item_details.value);
    item_title.value = "";
    item_details.value ="";

    item_title.focus();
}
function removeItem(event){
    var item = event.target.parentNode;
    list.removeChild(item);
    
    // console.log(item);
}

function insertItem(title,text){
    var element = document.createElement('section');
    var element_title = document.createElement('div');
    var element_details = document.createElement('div');
    var remove = document.createElement('button');


    element_title.innerHTML = title;
    element_details.innerHTML = text;
    remove.innerHTML = "Remove Item";

    element.appendChild(element_title);
    element.appendChild(element_details);
    
    element.appendChild(remove);

    remove.addEventListener('click', removeItem);

    list.appendChild(element);


}