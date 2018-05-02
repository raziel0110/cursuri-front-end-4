
var x,y;



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

for ( var j = 0; j < persons.length; j++){
    console.log(persons[j]);
    var currentPerson = persons[j];

    var bmi = currentPerson.weight / (currentPerson.height * currentPerson.height);

    

    if( bmi < 18.5){
        console.log(currentPerson.name + ' | ' + currentPerson.gender + ' | ' + ' |BMI: ' + bmi + ' underweight ');
    } else if(bmi < 25){
        console.log(currentPerson.name + ' | ' + currentPerson.gender + ' | ' + ' |BMI: ' + bmi + ' Normal Weight');
    } else if(bmi < 30){
        console.log(currentPerson.name + ' | ' + currentPerson.gender + ' | ' + ' |BMI: ' + bmi + ' Overweight');

    } else {
        console.log(currentPerson.name + ' | ' + currentPerson.gender + ' | ' + ' |BMI: ' + bmi + ' Obese');
    }
}


