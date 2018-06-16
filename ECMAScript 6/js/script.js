// variable hoisting


// var isValid = true;
// function validate(inputString){
//     //isValid is global variable - define outside the fn
//     console.log(isValid,error);
//     //HOISTING - error varible is "hoisted"(moved at the beginig of the fn) so will not be thrown an error
//     if(inputString.length === 0){
//         isValid = false;
//         var error = true;
//         console.log('String is not valid');
//         console.log(isValid);
//         console.log(error);
//     }
// }

// validate('');
// // error variable is a local variable declared in validate function
// // and it isn't accesible outside de function
// console.log('From Globals');
// console.log(isValid,error);
// // si la functie daca e apelata inainte de body-ul fn , va merge. va fi fn hoising 


// LET & CONST
    // let isValid2 = true;
    // function validate(inputString1){
    //     console.log(isValid2);
    // // Va da eroare pentru ca am pus const/let in loc de var(si nu va face hoisitng);    
    //     //console.log(error1);

    //     if(inputString1 === 0){
    //         const error1 = true;
    //         isValid2 = false;
    //         console.log('String is not valid');
    //         console.log(isValid2);
    //         console.log(error1);
    //     }
    // }

    // validate('');



// Arrow function
let isValid2 = true;
const validate = inputString => {
    
   
        console.log(isValid2);
    // Va da eroare pentru ca am pus const/let in loc de var(si nu va face hoisitng);    
        //console.log(error1);

        if(inputString === 0){
            const error1 = true;
            isValid2 = false;
            console.log('String is not valid');
            console.log(isValid2);
            console.log(error1);
        }
    
}
// since validate is declared with 'const', the variable is NOT
// hoisted, so we're not able to call fn before body fn
validate('');