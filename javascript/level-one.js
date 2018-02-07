// What do you do when you see a JS toy problem?
// 1- clarify what is being asked.
// 2- look at or ask for sample data/ sample results.
// 3- pseudo code- code broken down into regular English - list out the tools or methods that you’ll use.
// 4- code
// 5- come up with another solution

                // PROBLEM #1   Evens array

// Create a function to filter over the array called numbers and return a new array with only the even numbers. Make sure to use the arrow function combined with the filter method.
// * Should use arrow function
// * Should use filter method
// * Should return all even numbers

var numbers = [1, 2, 3, 4];

var evens = () => numbers.filter(e => e % 2 === 0);

            // PROBLEM #2  odd and even arrays

// Create a function using the filter method that separates all even numbers and all odd numbers into separate arrays.
//* [1, 2, 3, 4, 5, 6] should result in [1, 3, 5] and [2, 4, 6]

var arr = [1, 3, 5, 6, 8, 9, 10, 22, 35]
    let evens = [];    //
    let odds = [];


function separate(arr) {

    arr.forEach(e => {
      if (e % 2) {
        return odds.push(e);
      } else {
        return evens.push(e);
      }
    })
}  
 // or you can use a ternary as seen below
 let evens = [];
 let odds = [];

 function separate(arr) {

    arr.map(e => {
      return e % 2? odds.push(e) : evens.push(e);
    })
  } 

  //                 PROBLEM #3   reverse array from n
  //Get the number n to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = (n) => {
    result = [];                             //create an empty array to push created values into
    for (var i = n; i > 0; i--) {              // iterate in descending order from value of n
       
      result.push(i);
    }
    return result;
  };

  // and below are a few other solutions that were new to me
  const reverseSeq = n => Array.from(Array(n), (_, i) => n - i);

  const reverseSeq = n => Array.from({length: n}, () => n--);

                         // PROBLEM #4  filter "A's"
// Inside the startWithLetterA function use the built in filter method to filter over the array called strings and return a new array with only the strings that start with a letter "a". Make sure to use the arrow function combined with the filter method.
// * The strings variable will be changed during tests.
// * Should use arrow function
// * Should use filter method

var strings = ['apple', 'banana', 'pear', 'animal', 'ape', 'Angel'];

function sortStr(arr) {
  return arr.filter(item => item[0] === 'a' || item[0] === 'A'); //there's probably a better
}                                                               //solution for case insensitive

//the solution below is a bit more streamlined with more ES6 (additional arrow function) and a function expression

var sortStr = arr => arr.filter(item => item[0] === 'a' || item[0] === 'A');

             //   PROBLEM #5   map 'Hello x'
 // Inside the formalGreeting function use the built in .map method to map over the array called names and return a new array with "Hello, " appended to the beginning of each name. Make sure to use the arrow function combined with the map method.

// * The names variable will be changed during tests.
// * Should use map method

var names = ['Jim', 'Tim', 'Joe', 'Josh']


function formalGreeting(arr) {
  return arr.map(e => "Hello " + e + '!');
}
formalGreeting(names);

// use of arrow functions, a template string, and function expression below:

var formalGreeting = arr => arr.map(e => `Hello ${e}!`);

formalGreeting(names);

//               PROBLEM #6
// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

// humanYears >= 1
// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

var humanYearsCatYearsDogYears = function(humanYears) {
    // Your code here!
    var catYears = 0;
    var dogYears = 0;
    if (humanYears === 1) {
      catYears = 15;
      dogYears = 15;
    } else if (humanYears === 2) {
      catYears = 24;
      dogYears = 24;
    } else if (humanYears > 2) {
      catYears = ((humanYears - 2) * 4) + 24;
      dogYears = ((humanYears - 2) * 5) + 24;
    }
    return [humanYears,catYears,dogYears];
  }

  // below is a very clever way I found on codewars using ternaries
  const humanYearsCatYearsDogYears = h => [h, (h - 1 ? 16 : 11) + 4 * h, (h - 1 ? 14 : 10) + 5 * h]; //if humanYears is any number greater than 1, then it follows the first option in the ternary and calculates to the correct answer. If the number is 1, then it follows the second option in the ternary