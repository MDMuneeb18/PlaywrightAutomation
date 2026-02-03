// Object is collection of properties
let person = {
    firstName : "Mohammad",
    lastName : "Muneeb",
    age : 22,
    fullName : function() {
        return this.firstName+" "+this.lastName;
    }
};

// accessing object properties using . notation
console.log(person.firstName);

// accessing object properties using array type of notation
console.log(person["lastName"]);

// updating values of properties of object
person.firstName = "MOHAMMAD";
console.log(person.firstName);

// add a new property - if the property exist then updates that property's value else adds new property
person.gender = "Male";
console.log(person);

// if we want to delete any property of object
delete person.gender;
console.log(person);

// if we want to check a specific property exist in a obbject or not
console.log("gender" in person);

// iterate through the properties of object
for(let key in person){
    console.log(person[key]);
}

console.log( person.fullName() );
// if we are calling property name which is a function input from object then we need to specify the parenthesis

