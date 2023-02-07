/**
 * Returns true if any element in the array matches the callback function expression
 * It is based on Array.prototype.some
 * 
 * @param {Array} array The array to test
 * @param {function} callback The callback function expression to evaluate on each element
 * 
 * @return {boolean} true if any element in the array matches the callback function
 */
function any(array, callback) {
    // TODO   
    /*
    recorrer array
    hasta que la callback cumpla la condicion
    si la cumple devoler true
    si ningun element la comuple, devolver fase
    */

    for (var i = 0; i < array.length; i++) {
        var element = array[i]

        var matches = callback(element)

        if (matches) return true
    }

    return false
}


// tests

// case 0

var nums = [10, 20, 30, 60, 40, 50]
var isGreaterThan50 = num => num > 50
var result = any(nums, isGreaterThan50)
console.log(result) // true

// case 1

var nums = [100, 200, 300, 400, 50]
var isLowerThan = num => num < 50
var result = any(nums, isLowerThan)
console.log(result) // false
