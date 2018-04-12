// //alert("my first js");
// // var age = 33;
// // console.log("my age is", age);

// var paragraph = "Line 1 \nLine 2\"";
// console.log(paragraph);

// var quotes = "\" this is a quotes \"";
// console.log(quotes);

// var isTrue = true;
// var isFalse = false;

// console.log(isTrue,isFalse);

// var nullValue = null;
// console.log("null value",nullValue);
// var undefinedValue;
// console.log(undefinedValue);

// var x = 2;
// console.log(x);
// x = undefined;
// console.log(x);

// console.log(43%10);
// console.log(2=='2');
// console.log(2==='2');
// console.log(2===2);// recomanded operator;

// console.log(typeof 10);
// console.log(typeof "true");

// console.log(typeof maVariable);
// console.log(typeof nullValue);
// var n =10;
// var isPositive = n > 0 ? true : false;
// console.log('is Positive', isPositive);

// var positive = n > 0 ? 1 : 0;
// console.log(positive);

// var price = 4.99;
// console.log("this price is", price ,"$");

// var content = "";
// for (let i = 0; i < 7; i++){
//   content +="#";
//   console.log(content);
// }

// ======================= Curs 8 - 22.03.2018 ======================================================
var p = 1+1;
var q = p * 2;
console.log(p,q);

var firstName = "Chuck";
var lastName = "Norris";

var fullName = firstName +" "+lastName;
console.log(fullName);

// =============================== Array ===================================

var names = ["Gabi","Vlad","Adi","David","Lidia","Ema"];
console.log(names[2]);
console.log(names.sort());
console.log("lenght",names.length);

// ============================= Object ==============================
var robot = {
  model : "TRX1000",
  color : "red",
  "full name" : "Robot's Name",
  walk : function(){
    console.log("Robot is walking");
  }
};

console.log(robot.color);
robot.walk();
console.log('full name',robot["full name"]);

// ========================== IF STATEMENT ===============================
var color = "red";
if (color === "red") {
  console.log("Red color");
} else {
  console.log("Not Red");
}


var email = "albangabriel42@gmail.com";
if(email.indexOf("@") > -1) {  // returneaza pozitia "@"-ului
  console.log("Email correct");
  console.log(email.indexOf("@"));
} else {
  console.log("Email incorrect");
}

var weather = "cloudy";

switch (weather){
  case "sunny":
    console.log("Iesi la apa");
    break;
  case "rainy":
    console.log("Iati umbrela");
    break;
  case "cloudy":
    console.log("E vreamea pt o plimbare");
    break;
  default:
    console.log("Bai frate e vreme ciudata");
    break;
   
}
// ====================== WHILE ============================
var i = 0;
while(i< 10){
  console.log("number",i);
  i++;
}
console.log("while done");


// ==================================== DO WHILE ========================
var j =15;
do {
  console.log(j);
  j++;
  
} while(j<10);

// ================================= FOR LOOP ====================================

var numbers = [4,8,-2,5];
for(var k = 0; k < numbers.length; k++){
  console.log('positie k',k);
  console.log('elementul de pe pozitia k',numbers[k]);
}


var num = 20;
var m;
for(m = 0;i < num; m++){
  console.log(m);
}

