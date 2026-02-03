// function to add 2 numbers
function add(a, b){
    return (a+b);
}

console.log(add(5, 5));

// other ways to write functions. These are called Anonymous functions. These do not have name
// Anonymous functions can be applied to variables only. "=>" represents Anonymous function
let sumOfIntegers = function(a, b){
    return a+b;
}
console.log(sumOfIntegers(4,5));

let sumOfNumbers = (a, b) => a+b ;
//how to pass values then? Just use the variable name and pass the values to it
console.log(sumOfNumbers(2,3));