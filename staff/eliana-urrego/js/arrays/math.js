/**
 * 
 *
 * @param {array} numbers The array of numbers to be multiplicated
 * @param {number} multiplicador 
 * @return {array} array of numbers multiplicados
 */
function multiplicar(numbers, multiplicador) {
  var results = []

  for (var i = 0; i < numbers.length; i++) {
    results[i] = numbers[i] * multiplicador;
  }

  return results
}

//test

var results = multiplicar([10, 60, 5], 2);
// output expectd = [20, 120, 10]
console.log(results)

var results = multiplicar([7, 3, 1], 10);
// output expectd = [70, 30, 10]
console.log(results)