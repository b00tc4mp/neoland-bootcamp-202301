//HECHO CON CONSOLE.LOG
// var results = ['pepito', 'juanito', 'felipito', 'mafalda', 'anna', 'etc']

// function convertToUpperCase(strings){
//     for (var i=0; i<strings.length; i++){

//     console.log(results[i].toUpperCase());
// }
// }

// convertToUpperCase (results)

/**
 * Returns an new array with the elements of the given input array converted to upper case.
 *
 * @param {array} strings The input array to convert to upper case
 * @return {array} The new array with the elements of the given input array converted
 */

function convertToUpperCase(strings) {
  var array = [];

  for (var i = 0; i < strings.length; i++) {
    var stringInUpperCase = strings[i].toUpperCase();
    array[i] = stringInUpperCase;
  }

  return array;
}

// THIS FUNCTION MODIFY THE ORIGINAL ARRAY
// function convertToUpperCase(strings) {
//   for (var i = 0; i < strings.length; i++) {
//     var stringInUpperCase = strings[i].toUpperCase();
    
//     strings[i] = stringInUpperCase;
//   }

//   return strings;
// }

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

//HECHO CON RETURN

// function convertToUpperCase(strings){
//     for (var i = 0; i < strings.length; i++){
//     var results = (strings[i].toUpperCase());
//     return results;
// }
// }
