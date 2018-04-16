window.onload = onHtmlLoaded;

function onHtmlLoaded() {
    var firstName = document.querySelector('input[name = "first_name"]');
    var lastName = document.querySelector('input[name = "last_name"]');
    var comment = document.getElementById('comment');
    var gen = document.getElementsByName('gender');
    
    var form = document.querySelector('form');

    form.addEventListener('submit',function(event){
        event.preventDefault();
        validate(firstName.value,lastName.value,gen,comment.value);
       
        
    });
}

function validate(first,last,text){
    var gender = document.getElementsByName('gender');
    var first = document.forms['form']['first_name'];
    var last = document.forms['form'] ["last_name"];
    var text = document.querySelector('textarea[name = "comment"]');
    if(gender[0].checked){
        if(first.value !== "" && last.value !== "" && text.value !== "" ){
            console.log(first.value,last.value,gender[0].value,text.value);
            divVizibile(last.value);
            setTimeout(dispare,5000);
            first.style.border = "";
            last.style.border = "";
            text.style.border ="";
            first.value = "";
            last.value = "";
            text.value = "";
            gender[0].checked = false;

        } else if(first.value === "" && last.value === "" && text.value === ""){
            first.style.border = "1px solid red";
            last.style.border = "1px solid red";
            text.style.border = "1px solid red";
            
        } else if (first.value !== "" && last.value === "" && text.value === ""){
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
    // } else if(gender[1].checked){
    //         if(first.value !== "" && last.value !== "" && text.value !== "" ){
    //             console.log(first.value,last.value,gender[1].value,text.value);
    //             divVizibile(last.value);
    //             setTimeout(dispare,5000);
    //             first.style.border = "";
    //             last.style.border = "";
    //             text.style.border ="";
    //             first.value = "";
    //             last.value = "";
    //             text.value = "";
    //             gender[1].checked = false;
    
    //         } else if(first.value === "" && last.value === "" && text.value === ""){
    //             first.style.border = "1px solid red";
    //             last.style.border = "1px solid red";
    //             text.style.border = "1px solid red";
                
    //         } else if (first.value !== "" && last.value === "" && text.value === ""){
    //             first.style.border = "";
    //             last.style.border = "1px solid red";
    //             text.style.border = "1px solid red";
                
    //         } else if (first.value === "" && last.value !== "" && text.value === ""){
    //             last.style.border = "";
    //             text.style.border = "1px solid red";
    //             first.style.border = "1px solid red";
                
    //         } else if (first.value === "" && last.value === "" && text.value !== ""){
    //             text.style.border = "";
    //             last.style.border = "1px solid red";
    //             first.style.border = "1px solid red";
                
    //         } else if (first.value !== "" && last.value !== "" && text.value === ""){
    //             last.style.border = "";
    //             first.style.border ="";
    //             text.style.border = "1px solid red";
                
    //         } else if (first.value === "" && last.value !== "" && text.value !== ""){
    //             last.style.border = "";
    //             text.style.border ="";
    //             first.style.border = "1px solid red";
            
    //         } else if (first.value !== "" && last.value === "" && text.value !== ""){
    //             text.style.border = "";
    //             first.style.border ="";
    //             last.style.border = "1px solid red";
                
    //             }
    //         }
    // else {
    // console.log("Bifeaza radio button!");
    // gender[0].style.border = "1px solid red";
    // gender[1].style.border = "1px solid red";
    // }
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