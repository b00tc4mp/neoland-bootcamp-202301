/**
 *
 * @param {*} array
 * @param {*} callback
 * @returns {boolean} returns true is at least one element of the array provided matches the condition of the callback. Otherwise, returns false
 */
function atLeastOneMatches(array, callback) {
    for (let i = 0; i < array.length; i++) {
        var element = array[i];
        var matchesTheCondition = callback(element);
        if (matchesTheCondition) {
        }
        return true;
    }
    return false;
}
var names = ["Laura", "Xavi", "Florencia", "Eli", "Juan"];
var isNamedPep = (name) => name === "Pep";

var result = atLeastOneMatches(names, isNamedPep);
console.log(result);
// output expected: false

var numbers = [100, 200, 3000, 8, -1];
var isNegativeNumber = (number) => number < 0;

var result = atLeastOneMatches(numbers, isNegativeNumber);
console.log(result);
// output expected: true

var words = ["hello", "world", "bye", "bye"];
var hasMoreThanFourChars = (word) => word.length > 4;

var result = atLeastOneMatches(words, hasMoreThanFourChars);
console.log(result);
  // output expected: true