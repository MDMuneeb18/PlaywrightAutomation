const PersonClass = require("./Classes.js");
class Pet extends PersonClass{
    constructor(firstName, lastName){
        // the parent class constructore must be called first in the child class
        super(firstName, lastName);
    }
    get location(){
        return "BlueCross";
    }
}
let petObject = new Pet("Sam", "San");
console.log(petObject.fullName());
console.log(petObject.location);