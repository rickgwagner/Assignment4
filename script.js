// Assignment 4

// Practice with JavaScript OOP Concepts (10 points)

// 1.	Create a namespace called Animal. Then, define two sub namespaces, one called Cat and another called Dog.

//var ANIMAL = ANIMAL || {};
//ANIMAL.Cat = {};
//ANIMAL.Dog = {};

// 2.	Abandon the use of namespaces and start over. Now, create two classes, one called Cat and another called Dog. The Cat class should be created using literal syntax and the Dog class should be created using the constructor syntax.

//var Cat = function () {
//}
//
//function Dog() {
//}

// 3.	Create a new instance of Cat class. Directly underneath, create a new instance of the Dog class.

//var newCat = new Cat();
//var newDog = new Dog();

//4.	Start over and now create a new class using constructor notation called Animal. When a new instance of the Animal class is created, the message “The Animal has been created” should be displayed in the console window.

//function Animal() {
//window.console.log("The Animal has been created");  
//};

// 5.	Now, change the above code so that is mimics a true constructor. The class should accept an argument and that value is what should be displayed in the console window. The message should be passed into the constructor at the moment that the Animal class is instantiated.

//var Animal = function (sometext) {
//    "use strict";
//    window.console.log(sometext);
//};
//var horse = new Animal("The horse has been created");

// 6.	Start over and now create a new class using literal syntax called Animal. Define five properties within your class including properties type, breed, color, height, and length. These properties will be set in the constructor so you’ll need to pass in arguments into the function’s constructor, set the properties, and then pass in the actual values during the object’s instantiation. 

//function Animal(type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//}
//var newDog = new Animal("dog", "labrador", "golden", "1.5 feet", "3 feet");

// 7.	Use a for-in loop to loop through and display all of the properties in the Animal class. You should see a total of 5 properties displayed in a list within the console window.


// ????????????????????????????????????

//function Animal(type, breed, color, height, length) {
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//}
//var newDog = new Animal("dog", "labrador", "golden", "1.5 feet", "3 feet");
//
//for (var prop in newDog) {
//  window.console.log(prop);
//}

// 8.	Now, create a public method called speak. Within the speak method you will use a conditional to check the type of Animal being created. If it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The <color> cat is meowing!” instead. Call that method after the Animal class has been instantiated.

function Animal(type, breed, color, height, length) {
    "use strict";
    this._type = type;
    this._breed = breed;
    this._color = color;
    this._height = height;
    this._length = length;
}
Animal.prototype.speak = function () {
    "use strict";
    if (this._type === "cat") {
        window.console.log("The " + this._color + " cat is meowing.");
    } else if (this._type === "dog") {
        window.console.log("The " + this._color + " dog is barking.");
    } else {
        window.console.log("Looking for a cat or dog here.");
    }
};

var myNewCat = new Animal("cat", "Bombay", "black", "9.8 inches", "18 inches plus tail");
myNewCat.speak();

var myNewDog = new Animal("dog", "Labrador", "golden", "24 inches", "36 inches");
myNewDog.speak();

 
// 9.	Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!”
 
// 10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.


//Does My Vehicle Need An Oil Change? (10 points)
//
//In this lab you will be build an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below:

