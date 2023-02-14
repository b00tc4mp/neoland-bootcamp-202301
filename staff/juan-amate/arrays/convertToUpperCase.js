/**
 * Returns an new array with the elements of the given input array converted to upper case.
 *
 * @param {array} strings The input array to convert to upper case
 * @return {array} The new array with the elements of the given input array converted
 */

// var names = ['pepito', 'juanito', 'felipito', 'mafalda', 'anna', 'etc'];

function convertToUpperCase(strings) {
  var array = [];
  // TODO implement me
  for (i = 0; i < strings.length; i++) {
    var stringInUpperCase = strings[i].toUpperCase();
    array[i] = stringInUpperCase;
  }
  return array;
}
console.log(results);

// tests

var results = convertToUpperCase([
  "pepito",
  "juanito",
  "felipito",
  "mafalda",
  "anna",
  "etc",
]);
console.log(results); // ['PEPITO', 'JUANITO', ... ]
