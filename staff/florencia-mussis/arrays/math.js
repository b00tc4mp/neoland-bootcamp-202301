/**
 * Returns the max value in the array of numbers
 *
 * @param {array} nums The array of numbers to be multiplicados
 * @param {number} multiplicador
 * @return {array} array of numbers multiplicados
 */
function multiplicar(numbers, multiplicador) {
  var nuevoArray = [];

  for (var i = 0; i < numbers.length; i++) {
    nuevoArray[i] = numbers[i] * multiplicador;
  }

  return nuevoArray;
}

// Test
var lista = [10, 60, 5];
var numero = 2;

console.log(multiplicar(lista, numero));

// var result = multiplicar([10, 60, 5], 2);
// output expectd = [20, 120, 10]

var result = multiplicar([7, 3, 1], 10);
// output expectd = [70, 30, 10]

console.log(result);
