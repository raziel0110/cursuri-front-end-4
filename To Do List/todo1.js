var item = document.getElementById('item_add');
var btn_add = document.getElementById('add');
var list = document.getElementById('todo');

btn_add.addEventListener('click', insertToList);

function insertToList(){
    addItem(item.value);    
    item.value = "";
    item.focus();
    
    
}

function removeItem(){
    var item = this.parentNode;
    list.removeChild(item);
    
}

function addItem(text){
    var list_element = document.createElement('li');
    list_element.innerHTML = text;

    var remove = document.createElement('button');
    remove.innerHTML = 'Delete Item';

    remove.addEventListener('click', removeItem);

    list_element.appendChild(remove);
    list.appendChild(list_element);
}