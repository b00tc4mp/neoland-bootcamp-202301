/**
 * Returns true if all elements in the array match the callback function expression
 * It is based on Array.prototype.every
 * 
 * @param {Array} array The array to test
 * @param {function} callback The callback function expression to evaluate on each element
 * 
 * @return {boolean} true if all elements in the array match the callback function
 */
function all(array, callback) {
    // TODO   
    /*
    recorrer array
    mientras que la callback cumpla la condicion
    si la cumplen todos devoler true
    si algun element no la comuple, devolver fase
    */
    for( var i=0; i<array.length; i++){
        var elements= array[i]
        var matchesAllElements= callback(elements)
        if(!matchesAllElements) return false
    }
    return true
    }


// tests

// case 0

var nums = [10, 20, 30, 60, 40, 50]
var isGreaterThan5 = num => num > 5
var result = all(nums, isGreaterThan5)
console.log(result) // true

// case 1

var nums = [35, 25, 50, 15, 40]
var isLowerThan = num => num < 50
var result = all(nums, isLowerThan)
console.log(result) // false