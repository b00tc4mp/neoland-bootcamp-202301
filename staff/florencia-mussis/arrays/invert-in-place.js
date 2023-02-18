/**
 * Inverts the elements of an array
 * It is based on Array.prototype.reverse
 * 
 * @param {Array} array The array to invert the elements of
 * @return {Array} The array with the elements inverted
 */
function invert(array) {
    var limit = Math.floor(array.length / 2)
    
    for (var i = 0; i < limit; i++) {
        var temp = array[i]
        array[i] = array[array.length - 1 - i]
        array[array.length - 1 - i] = temp
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

var nums = [10, 20, 30, 40, 50]
var results = invert(nums)
console.log(results) // [50, 40, 30, 20, 10]

// case 3

var nums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var results = invert(nums)
console.log(results) // ['i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']