/**
 * Seeks for the first element in the array that matches the given callback function
 * It is based on Array.prototype.find
 * 
 * @param {Array} array The array to search for the first element from
 * @param {Function} callback The callback function to evaluate the search condition
 * 
 * @return {boolean} The element that matches the given callback function, or undefined if not found
 */
function seek(array, callback) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i];

        var found = callback(element)

        if (found) return element
    }

    return undefined
}

// tests

// case 0

var nums = [10, 20, 30, 40, 50, 60, 70, 80]
var isBiggerThan50 = function(num) { return num > 50 }

var result = seek(nums, isBiggerThan50)
console.log(result) // 60

// case 1

var staff = ['Eli', 'Juan', 'Xavi', 'Flor', 'Lau', 'Sho']
var hasAChar = function(str) { return str.includes('a') }

var result = seek(staff, hasAChar)
console.log(result) // 'Juan'

// case 2

var staff = ['Eli', 'Juan', 'Xavi', 'Flor', 'Lau', 'Sho']
var hasAUpperChar = function(str) { return str.includes('A') }

var result = seek(staff, hasAUpperChar)
console.log(result) // undefined