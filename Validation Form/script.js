window.onload = onHtmlLoaded;

function onHtmlLoaded() {
    var firstName = document.querySelector('input[name = "first_name"]');
    var lastName = document.querySelector('input[name = "last_name"]');
    var comment = document.getElementById('comment');
    var gen = document.getElementsByName('gender');
    var divCheck = document.getElementById('radio');
    var form = document.querySelector('form');

    form.addEventListener('submit',function(event){
        event.preventDefault();
        validate(firstName.value,lastName.value,gen,comment.value);
       
        
    });
}

function validate(first,last,text,gen){
    var gen = document.getElementsByName('gender');
    
    var first = document.forms['form']['first_name'];
    var last = document.forms['form'] ["last_name"];
    var text = document.querySelector('textarea[name = "comment"]');
    var gender= document.querySelector('input:checked');
        if(first.value !== "" && last.value !== "" && text.value !== "" && gender){
            console.log(first.value,last.value,gender.value,text.value);
            divVizibile(last.value);
            setTimeout(dispare,5000);
            first.style.border = "";
            last.style.border = "";
            text.style.border ="";
            first.value = "";
            last.value = "";
            text.value = "";
            gender.checked = false;
            
        } else if(first.value === "" && last.value === "" && text.value === "" && gen[0].checked === false && gen[1].checked === false){
            first.style.border = "1px solid red";
            last.style.border = "1px solid red";
            text.style.border = "1px solid red";
            console.log("bifeaza radio");
           
            
        } else if (first.value !== "" && last.value === "" && text.value === "" ){
            first.style.border = "";
            last.style.border = "1px solid red";
            text.style.border = "1px solid red";
            
        } else if (first.value === "" && last.value !== "" && text.value === ""){
            last.style.border = "";
            text.style.border = "1px solid red";
            first.style.border = "1px solid red";
            
        } else if (first.value === "" && last.value === "" && text.value !== ""){
            text.style.border = "";
            last.style.border = "1px solid red";
            first.style.border = "1px solid red";
            
        } else if (first.value !== "" && last.value !== "" && text.value === ""){
            last.style.border = "";
            first.style.border ="";
            text.style.border = "1px solid red";
            
        } else if (first.value === "" && last.value !== "" && text.value !== ""){
            last.style.border = "";
            text.style.border ="";
            first.style.border = "1px solid red";
        
        } else if (first.value !== "" && last.value === "" && text.value !== ""){
            text.style.border = "";
            first.style.border ="";
            last.style.border = "1px solid red";
            
        } 

        else if(gen[0].checked === false && gen[1].checked === false){
           console.log("Bifeaza radio button");
           first.style.border = "";
           last.style.border = "";
           text.style.border ="";
        }
    }

function divVizibile(nume) {
    var succes = document.getElementById('succefully');
    var nameInsert = document.getElementById('name_succefully');
    nameInsert.innerText = nume;

    succes.classList.remove('hidden');
    succes.classList.add('visibility');


}

function dispare(){
    var div = document.getElementById('succefully');
    div.classList.remove('visibility');
    div.classList.add('hidden');
}