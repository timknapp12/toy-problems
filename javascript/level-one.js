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

  //     PROBLEM #3   reverse array from n
  //Get the number n to return the reversed sequence from n to 1.

// Example : n=5 >> [5,4,3,2,1]

const reverseSeq = (n) => {
    result = [];                             //create an empty array to push created values into
    for (var i = n; i > 0; i--) {              // iterate in descending order from value of n
       
      result.push(i);
    }
    return result;
  };