// ========================= 1 ==========================

for( var i = 1; i<=20; i++){
    console.log("nr",i);
}

// ======================== 2 ==========================

for( var i = 1; i<=20; i++){
    if (i%2 !== 0){
    console.log("nr",i);
    }
}

// ======================= 3 ===========================

var arr = [3,4,6,5,1,9];
var sum = 0;
for (var j = 0; j < arr.length; j++){
 sum += arr[j];
}
console.log(sum);
console.log("=============================");
// ====================== 4 ===========================

var arr1 = [3,4,6,356,5,1,9,299,-1];
var max = 0;
var m = 0;

while( m < arr1.length){
    if (max < arr1[m]){
        max = arr1[m];
    }
    m++;
}
console.log(max);
//console.log(arr1);
// var sortArr = arr1.sort();
// console.log(sortArr);

// for (var k = 0; k < sortArr.length;k++){
//    // console.log(sortArr[k]);
// }
// console.log(sortArr[k-1]);



// ===================== 5 =============================

var arr2 = [1,4,5,4,9,6,4,0.-2,-6,5,4,0];
var arrNou = [];
var el = 4;
var pos = arr2.indexOf(el);

console.log(pos);


for( var l = 0; l < arr2.length - 1; l++){
    if( pos > -1){
    arrNou.push(pos);
    pos = arr2.indexOf(el,pos+1);
    
    }
}
console.log(arrNou);

console.log(arrNou.length);

//==================== sorting =================

var arr2 = [2,7,34,4,9,53,1];
var arr3 = [];
var aux;

// var i = 0;
// while (i < arr2.length){
//     if (arr2[i] > arr2[i+1]){
//         aux = arr2[i];
//         arr2[i] = arr2[i+1];
//         arr2[i+1] = aux;   
//     }
//     i++;
// }
arr2.sort(function(a,b){
 return a-b;
});
console.log(arr2);


//=========================

function reverseString(str){
 return str.split('').reverse().join('');
 
}

console.log(reverseString("Hello"));