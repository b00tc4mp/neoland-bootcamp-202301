/**
 * Returns an new array with the elements of the given input array converted to upper case.
 *
 * @param {array} strings The input array to convert to upper case
 * @return {array} The new array with the elements of the given input array converted
 */
function convertToUpperCase(strings) {
  
  var nuevoArray= []
 
  for (var i=0; i< strings.length; i++){
    nuevoArray[i]= strings[i].toUpperCase()

  }
 
  return nuevoArray
}

var results =[
  "pepito",
  "juanito",
  "felipito",
  "mafalda",
  "anna",
  "etc",
];

console.log(convertToUpperCase(results))

// tests

convertToUpperCase(results)