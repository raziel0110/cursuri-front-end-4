//======================================OBJECTS======================================
var car = {
    color : "red",
    nrKm : 10000,
    isNew : false,
    drive : function(distance){
        this.nrKm = this.nrKm + distance;
        console.log('Driving the car for :', distance);
        console.log('this car has '+ this.nrKm + " after driving it");
    }

}

console.log(car);
// accesing object properties
console.log(car.nrKm);
// o alta modalitate de a accesa proprietati prin array-uri
console.log(car["color"]);
//apelare metoda
car.drive(100);

// =======================================CLASSES====================================
//Declaratia unei clase
// ========================>>>>>>>>>>>>> FUNCTION CONSTRUCTOR

function Dog(data){
    data = data || {};
    this.name = data.name || "";
    this.age = data.age || 0;
    this.breed = data.breed || "";
    this.friendly = data.friendly || true;
}

//============================add class method

Dog.prototype.bark = function(){
    alert('Howl howl, barkin like a : ' + this.breed);
}


var dog1 = new Dog();
dog1.name =  "Arya";
dog1.age = 2;
dog1.breed = "Golden";


console.log(dog1);
// call class method
dog1.bark();


var dog2 = new Dog();
dog2.name =  "Azor";
dog2.age = 4;
dog2.breed = "Husky";

console.log(dog2);
dog2.bark();

var dog3 = new Dog({
    name : "Charlie",
    age : 6,
    breed : "Labrador"
});
console.log(dog3);
dog3.bark();
var dog5Data = {
    name : "Lolly",
    age :9,
    breed :"Terra Nova"
};

var dog5 = new Dog(dog5Data);
console.log(dog5);
