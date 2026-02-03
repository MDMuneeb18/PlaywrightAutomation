module.exports = class Person{
    //these are class variables
    //firstName = "Mohammad";
    //lastName = "Muneeb";
    
    age = 22
    //when we put get infront of any method then it is treated as property
    // use of getter
    // somethimes we need a property that depend on other values.
    // instead of calling a method like obj.calSomething() we can write obj.calSOmething
    get location(){
        return "Hyderabad";
    }
    // constructor is a method which executes by default when a new object is created of the class
    constructor(firstName, lastName){// these are called instance variables
        /*
            In JS when we create a class and use "this" inside a constructor, we are 
            dynamically adding properties to the object being created.
            So there is no need to predefine instance variables like in languages like java etc:-
        */
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        return this.firstName+" "+this.lastName;
    }
    get fullNameIs(){
        return this.firstName+" "+this.lastName;
    }
}
// In realtime we won't be creating anything here

// let personObject1 = new Person("Mohammad", "Muneeb");
// let personObject2 = new Person("Abdul", "Muqueeth");
// //console.log(personObject.firstName+" "+personObject.lastName);
// console.log(personObject1.location);
// console.log(personObject1.firstName);
// console.log(personObject1.lastName);
// console.log("Using Method full name retrieved : ",personObject1.fullName());
// console.log("Using Method full name retrieved : ",personObject2.fullName());
// console.log("Using Getter full name retrieved : ",personObject1.fullNameIs);