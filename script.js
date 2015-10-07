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

//function Animal(type, breed, color, height, length) {
//    "use strict";
//    this._type = type;
//    this._breed = breed;
//    this._color = color;
//    this._height = height;
//    this._length = length;
//}
//Animal.prototype.speak = function () {
//    "use strict";
//    if (this._type === "cat") {
//        window.console.log("The " + this._color + " cat is meowing.");
//    } else if (this._type === "dog") {
//        window.console.log("The " + this._color + " dog is barking.");
//    } else {
//        window.console.log("Looking for a cat or dog here.");
//    }
//};
//
//var myNewCat = new Animal("cat", "Bombay", "black", "9.8 inches", "18 inches plus tail");
//myNewCat.speak();
//
//var myNewDog = new Animal("dog", "Labrador", "golden", "24 inches", "36 inches");
//myNewDog.speak();

 
// 9. Now, convert all of your properties to private properties. Then, create a private method called checkType(). In this method you will check to see what the type is. If it’s dog, return dog, otherwise, return cat. Then, create a public method called speak that returns the value of the checkType() method. The console window should now display “The <animal type> has made a noise!” 

//function Animal(type, breed, color, height, length) {
//    "use strict";
//    var _type = type;
//    var _breed = breed;
//    var _color = color;
//    var _height = height;
//    var _length = length;
//    this.getType = function () {
//        return _type;
//    }
//}
//
//var checkType = function () {
//    if (this.getType === "cat") {
//        return "cat";
//    } else if (this.getType === "dog") {
//        return "dog";
//    } else {
//        window.console.log("Looking for a cat or dog here.");
//    }
//};
//    
//Animal.prototype.speak = function () {
//    window.console.log("The " + this.getType() + " has made a noise.");
//};
//
//var myNewCat = new Animal("cat", "Bombay", "black", "9.8 inches", "18 inches plus tail");
//myNewCat.speak();
//
//var myNewDog = new Animal("dog", "Labrador", "golden", "24 inches", "36 inches");
//myNewDog.speak();


// 10.	Create your own String method called findWords that inherits from the native String Object. This method should find all instances of a specific word within a provided paragraph of text. It should then alert out to the user the number of time that word was found in the paragraph.

//Adding a method to the String object

//String.prototype.findWords = function (paragraph, word) {
//    "use strict";
//    var wordFound = 0, wordCount = 0;
//    while (wordFound !== -1) {
//        wordFound = paragraph.indexOf(word, wordFound);
//        if (wordFound !== -1) {
//            wordCount = wordCount + 1;
//            wordFound = wordFound + 1;
//        }
//    }
//    window.alert("There are " + wordCount + " occurrences of the word " + word + ".");
//};
//
//String.prototype.findWords("For a moment, nothing happened. Then, after a second or so, nothing continued to happen.", "nothing");


//Does My Vehicle Need An Oil Change? (10 points)
//
//In this lab you will be build an application that determines whether or not your vehicle needs an oil change. If it does, it should alert the user of the fact within the console window. To complete this application, follow the steps outlined below:

//11. Create an abstract base class called Vehicle that accepts four parameters including make (string), model (string), total miles (number), and the mileage for the last oil change (number).

//var Vehicle = function (make, model, totalMiles, lastOilChange) {
//};

//12. Within the Vehicle class, create 6 public properties named make, model, totalMiles, drivenMiles, type, and lastOilChange. Initialize the make, model, totalMiles, and lastOilChange properties with their respective arguments. The drivenMiles property should be initialized to 0 and the type property should be initialized to an empty string.

//var Vehicle = function (make, model, totalMiles, lastOilChange) {
//    this.make = make;
//    this.model = model;
//    this.totalMiles = 0;
//    this.drivenMiles = 0;
//    this.type = "";
//    this.lastOilChange = 0;
//};

//13. Now create a public method called drive() that accepts a parameter (perhaps miles). Increment and set the public drivenMiles property to the miles argument. Return the method (return this).

//var Vehicle = function (make, model, totalMiles, lastOilChange) {
//    this.make = make;
//    this.model = model;
//    this.totalMiles = 0;
//    this.drivenMiles = 0;
//    this.type = "";
//    this.lastOilChange = 0;
//};
//
//Vehicle.prototype.drive = function (miles) {
//    this.miles += miles;
//    this.drivenMiles = this.miles;
//    return this;
//};

//14. Now create a public method called checkOil(). Within this method, check to see if the total miles minus the last oil change plus the driven miles are less than or equal to 3000. If they are, return a message to the user that they need an oil change. Otherwise, return the method (return this).

//????????????????????????????????????????????

//var Vehicle = function (make, model, totalMiles, lastOilChange) {
//    this.make = make;
//    this.model = model;
//    this.totalMiles = 0;
//    this.drivenMiles = 0;
//    this.type = "";
//    this.lastOilChange = 0;
//};
//
//Vehicle.prototype.drive = function (miles) {
//    this.drivenMiles += miles;
//    return this;
//};
//
//Vehicle.prototype.checkOil = function () {
//    if (this.totalMiles - this.lastOilChange + this.miles <= 3000) {
//        window.console.log("You need an oil change.");
//    } else {
//        return this;
//    }
//};
//
//var newCar = new Vehicle("Honda", "Fit", 150050, 150000);
//newCar.drive(2000);
//newCar.checkOil();

//window.console.log(newCar.drive(155000).checkOil()); 

//var newCar.drive(2000) = new Vehicle("Honda", "Fit", 150050, 150000);

//window.console.log(newCar.drive(2000));
//window.console.log(newCar.checkOil());

//totalMiles is what you've accumulated to a certain point. For instance, I have 150,000 miles on my car currently. 
//drivenMiles is the amount of miles that you've driven since the last oil change. I've driven 10,000 miles since my last oil change. This value is what you'll pass in when you call the .drive() method.
//totalMiles - lastOilChange + drivenMiles...is that value greater than 3,000?

//totalMiles - lastOilChange + drivenMiles...is that value greater than 3,000


//15. Now create a new sub class called Car that accepts one parameter for the amount of doors that the car has. 

//16. Within the new Car class, initialize a public property called doorCount and set it equal to the argument.

//17. Within the Car class use a conditional to check and see if the door count is greater than 2. If it is, set the type property to Sedan. Otherwise, set it to coupe.

//18. Now, make sure that the Car class inherits from the Vehicle base class. Use this opportunity to pass in the make, model, total miles, and last oil change values into the Vehicle’s constructor. 

//19. Then, create a new instance of the Car class and pass in the number of doors that the car has into the Car’s constructor.

//20. Finally, using method chaining, call the drive() method of the car object, passing in a numeric value as a parameter. At the same time, call the checkOil() method. Display the results in the console window. You will either get a message indicating your car needs an oil change or you will get the object hierarchy. 


//The Recipe Card (10 points)
//
//Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings). Your object should have a publically available method that when called, will log out the recipe within the console so that the recipe information looks like this:
//
//Guacamole
//Serves: 4
//Ingredients: 
//- 3 Avocados
//- 1 Lime
//- 1 Teaspoon Salt
//- 1/2 Cup Onion
//- 3 Tablespoons Cilantro
//- 2 Diced Tomatoes
//- 1 Teaspoon Garlic
//- 1 Pinch Ground Pepper


//var Recipe = function (title, servings, ingredients) {
//    "use strict";
//    this.title = title;
//    this.servings = servings;
//    this.ingredients = "";
//    window.console.log(this.title + ": \n" + "Serves: " + this.servings + "\n" + "Ingredients: \n");
//    for (var index in ingredients) {
//    window.console.log("-" + ingredients[index]);
//};
//}
//
//var Guacamole = new Recipe("Guacamole", 4, ["3 Avocados", "1 Lime", "1 Teaspoon Salt", "1/2 Cup Onion", "3 Tablespoons Cilantro",  "2 Diced Tomatoes", "1 Teaspoon Garlic", "1 Pinch Ground Pepper"]);


//The Reading List (10 points)
//
//Keep track of which books you read and which books you want to read! Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet). Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien". Then, use a conditional to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.' Make sure your object contains at least 5 books.


//var booklist = [];
//booklist[0] = {title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true};
//booklist[1] = {title: "Neuromancer", author: "William Gibson", alreadyRead: true};
//booklist[2] = {title: "A Separate Peace", author: "John Knowles", alreadyRead: false};
//booklist[3] = {title: "Ready Player One", author: "Ernest Cline", alreadyRead: true};
//booklist[4] = {title: "Island Beneath the Sea", author: "Isabel Allende", alreadyRead: false};
//
//for (var i = 0; i < booklist.length; i++) {
//    if (booklist[i]["alreadyRead"] === true) {
//    window.console.log("You already read " + booklist[i]["title"] + " by " + booklist[i]["author"]);
//    }
//     else {
//    window.console.log("You still need to read " + booklist[i]["title"] + " by " + booklist[i]["author"]);
//     }
//    }


// Fill in the Blanks (10 points)
// Fill in the blanks to make this program work.


(function() {
    var person = {
        buy: function () {
            window.console.log("I'm rich");
        }
    };

    var car = {
        price: 200000,
        drive: function () {
            window.console.log("vroom vroom");
        }
    };

    // print vroom vroom
    car.drive();

    // print 'I'm rich'
    if (car.price > 100000) {
        person.buy(car);
    }
}());
