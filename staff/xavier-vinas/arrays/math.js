



/**
 * Returns the max value in the array of numbers
 *
 * @param {array} nums The array of numbers to be multiplicados
 * @param {number} multiplicador 
 * @return {array} array of numbers multiplicados
 */




function multiplicar(numbers, multiplicador) {
    var resultMult=[];
     for(var i =0; i<numbers.length; i++){
      var nums= numbers[i];
      var number= multiplicador;
      resultMult[i]= nums* number;
      
     }
    
     return resultMult
    }
  
    var result = multiplicar([10, 60, 5], 2);
    // output expectd = [20, 120, 10]
    console.log(result)
    
    var result = multiplicar([7, 3, 1], 10);
    // output expectd = [70, 30, 10]
    console.log(result)