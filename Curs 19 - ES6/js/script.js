window.onload = function(){

console.log("log1");


var veryImportantPromise = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Log from setTimeout');
        resolve();
    },10000);
    
});



var onclickPromise = new Promise(function(res,rej){
    document.getElementById('ok').addEventListener('click',function(){
        res();
    });
    document.getElementById('cancel').addEventListener('click',function(){
        rej();
    });
    
});

onclickPromise.then(function(){
    console.log("Go cookies");
}).catch(function(){
    console.log("No cookies for dark side");
});
}


/////////////////////////////////////////////////////////////

function sum(a,b){
    return a+b;
}

//sum (3,4);
console.log(sum(3,4));