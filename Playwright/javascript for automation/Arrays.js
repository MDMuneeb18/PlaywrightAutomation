// initialising array with specified size
let marks = Array(6);
marks[0] = 23;
marks[1] = 34;
marks[4] = 67;
console.log(marks);

// initialising array with the values
var marks1 = new Array(10, 20, 30, 40, 50, 60);
console.log(marks1);

marks1 = [10, 20, 30, 40, 53, 50];
console.log(marks1);

console.log(marks1[0]);

marks1[0] = 11;
console.log(marks1[0]);

console.log(marks1.length);

// to add an element at the end of array .push() is the method
marks1.push(90);
console.log(marks1);
console.log(marks1.length);

// to delete an element at the end of the array use .pop() method
marks1.pop();
console.log(marks1);
console.log(marks1.length);

// to add element at the begining of the array use .unshift() method
marks1.unshift(12);
console.log(marks1);
console.log(marks1.length);

// to delete element from the begining of the array
marks1.shift();
console.log(marks1);
console.log(marks1.length);

// to retrieve the index of specific value in a array
console.log(marks1.indexOf(20));// returns index of 1st matching element

//120 is present in marks1 array or not - to check this we use .includes() method
console.log(marks1.includes(120));

// to take subarrays we use .slice() method
subArray = marks1.slice(2,5);
console.log(subArray);

// to iterate through the array
for(let i = 0; i < subArray.length; i++){
    console.log(subArray[i]);
}

let sum = 0;
for(let i = 0; i < subArray.length; i++){
    sum += subArray[i];
}
console.log(sum);

// .reduce() - reduce() method is used to reduce an array to a single value by applying 
//             a function to each element (from left to right).
let totalMarks = subArray.reduce( ( sum1, individualMarks ) => sum1+individualMarks, 0 );
console.log("Calculated using reduce function : ",totalMarks);
/*
    how does this work?
    sum1 - accumulator - it keeps track of running total, 
    individualMarks - current element in the array during each iteration,
    0 is the initial value of the accumulator.
    sum1 variable is intialised to 0 at the start, later the individualMarks variables iterate
    through subArray and add them to the sum1 variable

    Start with sum1 = 0 (initial value).
    First iteration: sum1 = 0 + 30 = 30
    Second iteration: sum1 = 30 + 40 = 70
    Third iteration: sum1 = 70 + 50 = 120
*/

// search for even numbers in array and add it to another array and print it
var evenArray = [];
for(let i =0; i<marks1.length; i++){
    if(marks1[i] % 2 == 0){
        evenArray.push(marks1[i]);
    }
}
console.log(evenArray);

// the same can be performed using .filter() method
let filterEvenArray = marks1.filter( score => score%2==0 );
console.log("Evaluated using filter method : ",filterEvenArray);

/*
    .filter() is a JS method that will create a array that will contain 
    elements which pass specific condition
    .filter() method will loop through each element in marks1 array
    for each element it applies the condition "score%2 == 0"
*/

//map - this function will modify each and every value of array to new value
// create a new array with even values and multiply each element with 3 
filterEvenArray = marks1.filter( score => score%2 == 0 );
let mappArray = filterEvenArray.map(score => score*3);
console.log("After using Map method : ",mappArray);

//create new array with even values; multiply them with 3 and sum them
let filteredEvenArray = marks1.filter( score => score%2 == 0 );
let mappedArray = filteredEvenArray.map( score => score * 3 );
let result = mappedArray.reduce( (sum1, individualMarks) => sum1+individualMarks, 0 );
console.log(result);

// we can also chain all the 3 functions
result = marks1.filter( score => score % 2 == 0 ).map( score => score * 3 ).reduce( (sumVariable, individualMarks) => sumVariable+individualMarks, 0 );
console.log("After chaining all the functions",result);