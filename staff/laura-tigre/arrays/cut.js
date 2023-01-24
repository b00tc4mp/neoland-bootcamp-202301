/**
 * Cuts a chunk of an array and returns it in a new array
 * It is based on Array.prototype.slice
 * 
 * @param {Array} array The array to cut
 * @param {number} start The starting index to cut from
 * @param {number} end The ending index to cut to
 */
function cut(array, start, end) {
    var newArray=[]
    for (var i= start; i<end; i++){
    //newArray[i]= array[i]
    newArray.push(array[i])
    }
    return newArray
}
var names = ["Laura", "Xavi", "Florencia", "Eli", "Juan"];

var result = cut(names, 1, 3);
console.log(result);
// output expected: ["Xavi", "Florencia"]

var numbers = [100, 200, 3000, 8, -1];

var result = cut(numbers, 0, 3);
console.log(result);
// output expected: [100, 200, 3000]

var words = ["hello", "world", "bye", "bye"];

var result = cut(words, 3, 4);
console.log(result);
// output expected: ["bye"]