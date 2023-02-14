/**
 * Inverts the elements of an array into a new array
 * It is based on Array.prototype.reverse
 * 
 * @param {Array} array The array to invert the elements of
 * @return {Array} The new array with the elements inverted
 */

function invert(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var aux = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = aux
    }
    
    return array
}

// tests

// case 0

var nums = [10, 20]
var results = invert(nums)
console.log(results) // [20, 10]

// case 1

var nums = [10, 20, 30]
var results = invert(nums)
console.log(results) // [30, 20, 10]

// case 2

var nums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var results = invert(nums)
console.log(results) // ['i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']
