/**
 *
 * @param {*} array
 * @param {*} startIndex index to start copying
 * @param {*} endIndex index to finish copying
 * @returns {Array} it returns a new array with all the elements of the array provided from the position starting in startIndex to the position of the endIndex
 */

function getSomeElements(array, startIndex, endIndex) {
    newArray = []
    for (var i = startIndex < endIndex; i++;) {
        var element = arrar[i];
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