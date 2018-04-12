// var board = "";

// var size = 8;

// for (var i = 0;i < 8; i++){ // parcurgere linie cu line
//   for (var j = 0; j<8;j++){ // parcurgere pe coloane
//     (board += (i+j)%2 ===0 ? " " : "#"); 
//   }
//  board +="\n"; // create new line
 
// }
// console.log(board);

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

// ====================== 4 ===========================

var arr1 = [3,4,6,5,1,9,29,0,];

var sortArr = arr1.sort();
console.log(sortArr);

// for (var k = 0; k < sortArr.length;k++){
//    // console.log(sortArr[k]);
// }
// console.log(sortArr[k-1]);
console.log(Math.max(...arr1));
// ===================== 4 VARIANTA 2-a ================
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
// ===================== 5 =============================

var arr2 = [1,4,5,4,9,6,4,0,4,4,4];
var arrNou = [];
var el = 4;
var pos = arr2.indexOf(el);
//console.log(pos);

for( var l = 0; l < arr2.length; l++){
    if( pos > -1){
    arrNou.push(pos);
    pos = arr2.indexOf(el,pos+1);
    
    }
}

console.log(arrNou.length);

