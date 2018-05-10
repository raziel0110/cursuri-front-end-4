var userData = [{
    name : "John",
    age : 34,
    height : 1.76,
    weight : 80
},
{
    name : "Marty",
    age :22,
    height :1.65,
    weight : 90
},
{
    name : "Anne",
    age : 44,
    height :1.73,
    weight : 45
},
{
    name : "Kevin",
    age : 33,
    height : 1.8,
    weight : 77
}];

function Person(data){
    data = data || {};
    this.name = data.name || "";
    this.age = data.age || 0;
    this.height = data.height || 0;
    this.weight = data.weight || 0;

}

Person.prototype.calculateBMI = function(){
    var bmi = this.weight/(this.height*this.height);
    // console.log(bmi);
    return bmi;
    
}

for(var i = 0; i < userData.length; i++){
 var newUser = new Person(userData[i]);
 //console.log(newUser);
 
    var userBmi = newUser.calculateBMI();
    if(userBmi < 18.5){
        console.log(newUser.name +' is underweight');
    } else if(userBmi < 25){
        console.log(newUser.name +' is normal');
    } else if(userBmi < 30){
        console.log(newUser.name +' is overweight');
    } else {
        console.log(newUser.name +' is Obese');
    }
}    


// altfel 

// for(var i = 0;i < userData.length;i++){
//     var currentUser =userData[i];
//     var u = new userBmi();
//     u.name = currentUser.name;
//     u.age = currentUser.age;
//     .
//     .
//     .

//     var bmirez = u.calculateBMI();
// } 