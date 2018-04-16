// var a = 2; // variabila locala

// function displayVariables(){
//     var b = 3;
//     c= 4;

//     console.log('a inside of function',a);//2
//     console.log('b inside of function',b);//3
//     console.log('c inside of function',c);//4
// }

// displayVariables();
//     console.log('a outside function',a); // 2
//     console.log('b outside function',typeof b); //undefined
//     console.log('c outside function',c); //4

// ============================================================

// var x = 1;//global

// function firstFunction(){
//     var y = 2;//local pt first fuction

//     function secondFunction(){
//         var z = 3; 

//         console.log("Second x =", x);
//         console.log("Second y =", y);
//         console.log("Second z =", z);

//         function thirdFunction(z){
//             z = 5;

//             console.log("Third x =", x);
//             console.log("Third y =", y);
//             console.log("Third z =", z);
//         }

//         thirdFunction(z);
//     }
//         secondFunction();
//         console.log("First x =", x);
//         console.log("First y =", y);
//         console.log("First z =", typeof z);
// }
// firstFunction();

// =============================================================

(function demoHoisting(){
    var a = 1000;
    console.log(a + " " +b);
    var b = 2000;
})(); // IIFE - autoapelare


// this is identical with 


(function demoHoisting(){
    var a = 1000;
    var b;
    console.log(a + " " +b);
    b = 2000;
})();
    // care e diferenta in function declaration si function expression  cand vine vorba de hoisting // TEMA
// ===============================CLOSURES==============================================================================

// citeste pana plangi........ :((