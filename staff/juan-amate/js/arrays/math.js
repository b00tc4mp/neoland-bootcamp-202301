/**
 * Returns the max value in the array of numbers
 *
 * @param {array} nums The array of numbers to be multiplicados
 * @param {number} multiplicador 
 * @return {array} array of numbers multiplicados
 */
function multiplicar(numbers, multiplicador) {
    // TODO implement this
    
    var numbersMultiplicados = [];
    
    var num = numbers[2];
    console.log(num);

    /*
    for (var i = 0; i < numbers.length; i++) {
        var num = multiplicador * numbers[i];
        numbersMultiplicados[i] = num;
    } 
    return numbersMultiplicados;
  }
  

  var result = multiplicar([10, 60, 5], 2);
  // output expectd = [20, 120, 10]
  
  var result = multiplicar([7, 3, 1], 10);
  // output expectd = [70, 30, 10]