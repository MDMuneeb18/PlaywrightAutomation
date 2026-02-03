let day = "tuesday ";
console.log(day.length);
let subDay = day.slice(0,4);
console.log(subDay);

// we want 2 seperate strings in an array as tue day
let splitDay = day.split("s");
console.log(splitDay);
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);

// to convert string to number
let date = '23';
let nextDate = "24";
let difference = parseInt(date) - parseInt(nextDate);
console.log( difference );

// to convert number to string
let numToString = difference.toString();
console.log(numToString);

// concatenation of  2 strings
let newQuote = day + "is Funday";
console.log(newQuote);

// if we want to know where exactly the character is present
console.log(newQuote.indexOf("day"));// returns first matching occurence
console.log(newQuote.indexOf("day", 5));// starts searching for that character from 5th index

// find  how many times day occured in a string
let count = 0;
let index = newQuote.indexOf("day");
while( index != -1 ){
    count++;
    index = newQuote.indexOf("day", index+1);
}
console.log(count);