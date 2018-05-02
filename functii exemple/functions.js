function printMessage(){
    console.log("my first functions");
}

printMessage();
// ===========================================
function print(message){
    console.log(message);

}

print("My first parameters");

// ===========================================

function printUsers(name,gender,weight,height){
    var bmi = weight / (height * height);

    

    if( bmi < 18.5){
        console.log(name + ' | ' + gender + ' | ' + ' |BMI: ' + bmi + ' underweight ');
    } else if(bmi < 25){
        console.log(name + ' | ' + gender + ' | ' + ' |BMI: ' + bmi + ' Normal Weight');
    } else if(bmi < 30){
        console.log(name + ' | ' + gender + ' | ' + ' |BMI: ' + bmi + ' Overweight');

    } else {
        console.log(name + ' | ' + gender + ' | ' + ' |BMI: ' + bmi + ' Obese');
    }

}

// printUsers("Ana","F",60,1.6);
// printUsers("Ion","M",180,1.8);
var persons = [
    {
      name: "Ana",
      gender: "F",
      height: 1.6,
      weight: 60
    },
    {
      name: "Ion",
      gender: "M",
      height: 1.8,
      weight: 180
    }
  ];

  for( var i = 0; i < persons.length; i++){
      printUsers(persons[i].name,persons[i].gender,persons[i].weight,persons[i].height);
  }

// ============================ parametri trimisi prin valoare ================================

function sum(a,b){
    console.log('sum:',a+b);

    a = "My special Nuumber";
    console.log(a);

}

sum(2,3);

var a = 2;var b = 3;
sum(a,b);

console.log(a); //  valoarea lui nu se schimba inafara functie;

// ========================== parametri trimisi prin referinta ==================================

function computeFullName(name){
    console.log(name.first + ' '+ name.last);
    name.last = "Batman";
    console.log(name.last);//Batman
}

var val = {
    first:"Bruce",
    last : "Wayne"
};

computeFullName(val);
console.log(val.last);






















