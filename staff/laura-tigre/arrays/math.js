/**
 * Returns the max value in the array of numbers
 *
 * @param {array} numbers The array of numbers to be multiplicados
 * @param {number} multiplicador 
 * @return {array} array of numbers multiplicados
 */
function multiplicar(numbers, multiplicador) {
  var resultMult = [];

  for (var i = 0; i < numbers.length; i++) {
    /**resultMult[i]= numbers[i]*multiplicador;**/
    var number = numbers[i];

    resultMult[i] = number * multiplicador;
  }

  return resultMult
}

var result = multiplicar([10, 60, 5], 2);
// output expectd = [20, 120, 10]
console.log(result)

var result = multiplicar([7, 3, 1], 10);
// output expectd = [70, 30, 10]
console.log(result)