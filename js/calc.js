function CalculationHandler(){
    CalculationHandler.result = null;
}
CalculationHandler.doAddition = function(num1, num2){
    return num1 + num2;
};
CalculationHandler.doSubtraction = function(num1, num2){
    if(num1 > num2){
        CalculationHandler.result = num1 - num2;
    } else{
        CalculationHandler.result = num2 - num1;
    }
    return CalculationHandler.result;
};

console.log(CalculationHandler.doAddition(3,2)); // displays 5
console.log(CalculationHandler.doSubtraction(3,2)); // displays 1


var myObj = new Object();
myObj.value = "my first value";
myObj.method = function(){
    return this.value;
};
console.log(myObj.method()); // displays "my first value"


var MyFirstObj = {
    myFirstValue : 2,
    mySecondValue : 5,
    addValues: function(){
        return this.myFirstValue + this.mySecondValue ;
    }
};
console.log( MyFirstObj.addValues()); // displays 7


function MyObjDefinition(){
    var myFirstValue = 2;
    var mySecondValue = 5;
    this.addValues = function(){
        return myFirstValue + mySecondValue;
    };
}
var myFirstObj = new MyObjDefinition();
console.log(myFirstObj.addValues()); // displays 7


// defining an object
function MyObjDefinition(){
    MyObjDefinition.myFirstValue = 2;
    MyObjDefinition.mySecondValue = 5;
}

// adding a property to the object
MyObjDefinition.addValues = function(){
    return this.myFirstValue + this.mySecondValue;
};

// initializing the object by calling it as a function
MyObjDefinition();
var anotherObj = new MyObjDefinition();
anotherObj.addValues(); // error


var firstPerson = CreatePerson("Tom", "Software Developer");

function CreatePerson(personName, personJob){
    // creating an object instance, using object type
    var person = new Object();
    // we can also use an object literal instead as below
    // var person = {};
    person.name = personName;
    person.job = personJob;
    return person;
}
console.log(firstPerson.name); // displays "Tom"


var Tom = {
    name: "Tom"
};
Tom.job = "SoftWare Developer";
console.log(Tom.job); // displays "Software
console.log(Tom.name); // displays "Tom"


Tom.job = "SoftWare Developer"; // "TypeError: Cannot set property 'job' of undefined"
var Tom = {
    name: "Tom"
};


function CreatePerson(personData){
    var person = {}; // using Object literal
    person.name = personData.Name;
    person.job = personData.Job;
    return person;
}
var personData = {
    Name: "Tom",
    Job: "Software Developer"
};
var firstPerson = new CreatePerson(personData);
console.log(firstPerson.name); // displays "Tom"


function Person(){
    this.name = "Tom";
    this.job = "Software Developer";
}
Person();
console.log(window.name); // displays "Tom";
console.log(window.job); // displays "Software Developer";

function CreatePerson(personData){
    this.name = personData.Name;
    this.job = personData.Job;
}
var personOneData = {
    Name: "Tom",
    Job: "Software Developer"
};
var firstPerson = new CreatePerson(personOneData);
console.log(firstPerson.name); // displays "Tom"
console.log(firstPerson.job); // displays "Software Developer"

var personTwoData = {
    Name: "John",
    Job: "Software Architect"
};
var secondPerson = new CreatePerson(personTwoData);
console.log(secondPerson.name); // displays "John";
console.log(secondPerson.job); // displays "Software Architect"


var name = "The window global";
var myOwnObject = {
    name: "my Own Object",
    getName: function(){
        return this.name;
    }
};
console.log(myOwnObject.getName()); // displays "my Own Object"
console.log((myOwnObject.getName = myOwnObject.getName)()); // displays "The Window global"


var name = "The window global";
var myOwnObject = {
    name: "my Own Object",
    getName: function(){
        return function(){
            return this.name;
        };
    }
};
console.log(myOwnObject.getName()()); // displays "The window global"

var page = 41;