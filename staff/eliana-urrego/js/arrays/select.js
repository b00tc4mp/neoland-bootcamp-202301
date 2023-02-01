/**
 * Selects the elements from an array that match the given condition in the callback function
 * It is based on Array.prototype.filter
 * 
 * @param {Array} array The array to select the elements from
 * @param {*} callback The callback function with the condition to evaluate on each element
 * 
 * @return {Array} Array of elements that match the given condition
 */
function select(array, callback) {
    newArray = []
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var matchesTheCondition = callback(element)
        if (matchesTheCondition) newArray.push(element)
    }
    return newArray;
}
// tests

// case 0

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
var hasLengthBiggerThan6 = word => word.length > 6

var results = select(words, hasLengthBiggerThan6)
console.log(results) // ['exuberant', 'destruction', 'present']

// case 1

var nums = [1, 2, 3, 4, 5]
var isEven = num => num % 2 === 0

var results = select(nums, isEven)
console.log(results) // [2, 4]

// case 2

var nums = [1, 2, 3, 4, 5]
var isOdd = num => num % 2 === 1

var results = select(nums, isOdd)
console.log(results) // [1, 3, 5]