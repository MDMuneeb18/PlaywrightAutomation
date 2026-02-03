// String array sorting
var fruits = ["Banana", "Pomegranate", "mango", "apple", "Jackfruit"];

//.sort() can be applied to only strings
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
// first the words starting with capital letters will be sorted according to alphabetical order 
// and then the words with small letters will be sorted according to alphabetical order

//for array with numbers we need to apply custom logic
let marks = [12, 13, 19, 16, 14];
console.log( marks.sort( (a, b) => a-b ) );
/* how does this work?
    (a, b) => a-b is a comparison function used to detrmine the sort order
    the comparison function works like this
    if result is positive b comes before a
    if result is negative a comes before b
    if result is 0 their order remains unchanged
*/