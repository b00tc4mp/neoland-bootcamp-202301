/**
 * Transforms the elements from an input array by means of a callback to other elements in an output array.
 *
 * @param {Array} array The array of elements to transform
 * @param {*} callback The callback function that transforms the elements
 *
 * @return {Array} The array of transformed elements
 */
function forEachElement(array, callback) {
  for (var i = 0; i < array.length; i++) {
    var element = array[i];

    callback(element);
  }
}

// tests
var name = ["Flor", "Laura", "Eli", "Xavi", "Juan"];
var welcomeMessage = (string) => {
  console.log("Welcome " + string + "!!!");
};

forEachElement(name, welcomeMessage);
