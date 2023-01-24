// ////////////////////////////// TRANSFORM

// /**
//  * Transforms the elements from an input array by means of a callback to other elements in an output array.
//  * 
//  * @param {Array} array The array of elements to transform
//  * @param {*} callback The callback function that transforms the elements
//  * 
//  * @return {Array} The array of transformed elements
//  */

// function transform(array, callback){
//   var newArray = [];
//   for (var i = 0; i< array.length; i++){
//     newArray[i]= callback(array[i]) 
//  }
//   return newArray
// }


// // tests

// // case 0

// var nums = [10, 20, 30];
// var mulBy1000 = (num) => { return num * 1000 }

// var results = transform(nums, mulBy1000)
// console.log(results) // [10000, 20000, 30000]


// // case 1

// var nums = [10, 20, 30]
// var toStringPercent = function(num) { return num + '%' }

// var results = transform(nums, toStringPercent)
// console.log(results) // ['10%', '20%', '30%']

// // case 2

// var names = ['foo', 'bar', 'baz']
// var toUpper = string => string.toUpperCase()

// var results = transform(names, toUpper)
// console.log(results) // ['FOO', 'BAR', 'BAZ'] 

// // case 3

// var radians = [Math.PI, 2 * Math.PI, -Math.PI/2]
// function toDegrees(radians) { return radians * 180 / Math.PI}

// var results = transform(radians, toDegrees)
// console.log(results) // [180, 360, -90]

///////////////////////// SELECT

// /**
//  * Selects the elements from an array that match the given condition in the callback function
//  * It is based on Array.prototype.filter
//  *
//  * @param {Array} array The array to select the elements from
//  * @param {*} callback The callback function with the condition to evaluate on each element
//  *
//  * @return {Array} Array of elements that match the given condition
//  */
// function select(array, callback){
//   var newArray=[];
//   for( var i =0; i< array.length; i++){
//     var element = array[i]
//     if (callback(element))
//     newArray.push(element)
//   }

//   return newArray
// }
  
//   // tests
  
//   // case 0
  
//   var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
//   var hasLengthBiggerThan6 = (word) => word.length > 6;
  
//   var results = select(words, hasLengthBiggerThan6);
//   console.log(results); // ['exuberant', 'destruction', 'present']
  
//   // case 1
  
//   var nums = [1, 2, 3, 4, 5];
//   var isEven = (num) => num % 2 === 0;
  
//   var results = select(nums, isEven);
//   console.log(results); // [2, 4]
  
//   // case 2
  
//   var nums = [1, 2, 3, 4, 5];
//   var isOdd = (num) => num % 2 === 1;
  
//   var results = select(nums, isOdd);
//   console.log(results); // [1, 3, 5]

/////////////////////// SEEK

// /**
//  * Seeks for the first element in the array that matches the given callback function
//  * It is based on Array.prototype.find
//  * 
//  * @param {Array} array The array to search for the first element from
//  * @param {Function} callback The callback function to evaluate the search condition
//  * 
//  * @return {boolean} The element that matches the given callback function, or undefined if not found
//  */
// function seek(array, callback){
//  for(var i =0; i<array.length; i++){
//   var element= array[i]
//   if (callback(element))
//   return element
//  }

//   return undefined
// } 
  

// // tests

// // case 0

// var nums = [10, 20, 30, 40, 50, 60, 70, 80]
// var isBiggerThan50 = function(num) { return num > 50 }

// var result = seek(nums, isBiggerThan50)
// console.log(result) // 60

// // case 1

// var staff = ['Eli', 'Juan', 'Xavi', 'Flor', 'Lau', 'Sho']
// var hasAChar = function(str) { return str.includes('a') }

// var result = seek(staff, hasAChar)
// console.log(result) // 'Juan'

// // case 2

// var staff = ['Eli', 'Juan', 'Xavi', 'Flor', 'Lau', 'Sho']
// var hasAUpperChar = function(str) { return str.includes('A') }

// var result = seek(staff, hasAUpperChar)
// console.log(result) // undefined

// ////////////////////////////////// AT LEAST ONE MATCHES

// /**
//  *
//  * @param {*} array
//  * @param {*} callback
//  * @returns {boolean} returns true is at least one element of the array provided matches the condition of the callback. Otherwise, returns false
//  */
// function atLeastOneMatches(array, callback){
//   for(var i=0; i< array.length; i++){
//     var element= array[i]
//     if (callback(element))
//     return true
//   }
//   return false
// }


//   var names = ["Laura", "Xavi", "Florencia", "Eli", "Juan"];
//   var isNamedPep = (name) => name === "Pep";
  
//   var result = atLeastOneMatches(names, isNamedPep);
//   console.log(result);
//   // output expected: false
  
//   var numbers = [100, 200, 3000, 8, -1];
//   var isNegativeNumber = (number) => number < 0;
  
//   var result = atLeastOneMatches(numbers, isNegativeNumber);
//   console.log(result);
//   // output expected: true
  
//   var words = ["hello", "world", "bye", "bye"];
//   var hasMoreThanFourChars = (word) => word.length > 4;
  
//   var result = atLeastOneMatches(words, hasMoreThanFourChars);
//   console.log(result);
//   // output expected: true

//////////////////////// GET SOME ELEMENTS

/**
 *
 * @param {*} array
 * @param {*} startIndex index to start copying
 * @param {*} endIndex index to finish copying
 * @returns {Array} it returns a new array with all the elements of the array provided from the position starting in startIndex to the position of the endIndex
 */
function getSomeElements(array, startIndex, endIndex){
 var newArray= [];
 for(var i = startIndex; i<endIndex; i++){
  var element = array[i]
  newArray.push(element)
 }
 return newArray
}
var names = ["Laura", "Xavi", "Florencia", "Eli", "Juan"];

var result = getSomeElements(names, 1, 3);
console.log(result);
// output expected: ["Xavi", "Florencia"]

var numbers = [100, 200, 3000, 8, -1];

var result = getSomeElements(numbers, 0, 3);
console.log(result);
// output expected: [100, 200, 3000]

var words = ["hello", "world", "bye", "bye"];

var result = getSomeElements(words, 3, 4);
console.log(result);
// output expected: ["bye"]