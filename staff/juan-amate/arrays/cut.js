/**
 * Cuts a chunk of an array and returns it in a new array
 * It is based on Array.prototype.slice
 * 
 * @param {Array} array The array to cut
 * @param {number} start The starting index to cut from
 * @param {number} end The ending index to cut to
 */

function cut(array, start, end) {
    var newArray = []

    for (i = start; i < end + 1; i++) {
        var aux = array[i];
        newArray.push(aux)
    }
    return newArray
}

// test

// case 0

var chart = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var results = cut(chart, 4, 7)
console.log(results) // ['e', 'f', 'g', 'h']