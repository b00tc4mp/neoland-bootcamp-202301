/**
 * Transforms the elements from an input array by means of a callback to other elements in an output array.
 *
 * @param {Array} array The array of elements to transform
 * @param {*} callback The callback function that transforms the elements
 *
 * @return {Array} The array of transformed elements
 */
function transform(array, callback) {
//creas una nueva array para que se almacene al hacer el for 
  var newArray = [];

  for (var i = 0; i < array.length; i++) {
//creas una nueva var y le asignas la el array [i]( recorrido )
    var element = array[i];
//recorres la array vacia y le dices que es igual al callback del " element "
    newArray[i] = callback(element);

    //  newArray.push(callback(array[i]));
  }
  // TODO
  return newArray; // retornas el nuevo array 
}



// case 0

var nums = [10, 20, 30];
var mulBy1000 = (num) => {
  return num * 1000;
};

var results = transform(nums, mulBy1000);
console.log(results); // [10000, 20000, 30000]

// case 1

var nums = [10, 20, 30];
var toStringPercent = function (num) {
  return num + "%";
};

var results = transform(nums, toStringPercent);
console.log(results); // ['10%', '20%', '30%']

// case 2

var names = ["foo", "bar", "baz"];
var toUpper = (string) => string.toUpperCase();

var results = transform(names, toUpper);
console.log(results); // ['FOO', 'BAR', 'BAZ']

// case 3

var radians = [Math.PI, 2 * Math.PI, -Math.PI / 2];
function toDegrees(radians) {
  return (radians * 180) / Math.PI;
}

var results = transform(radians, toDegrees);
console.log(results); // [180, 360, -90]
