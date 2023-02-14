/**
 * Returns the average of an array of numbers
 * 
 * @param {array} nums The numbers to extract the average from 
 * @return {number} The average of the numbers
 */
function average( nums ) {  
    var sum = 0 

    for ( var i = 0 ; i < nums.length ; i++){
     
    sum += nums[i] 
    }
    var averageCalculed = sum / nums.length
    return averageCalculed
    
  
}

// tests

var result = average([10, 20, 30])
console.log(result) 

var result = average([0, 20, 30, 40, 50])
console.log(result)

var result = average([1.2, 3.4, 5.6, 7.8, 9.10])
console.log(result)
// fijate que buscando tranquilamente function average calculator javascript has visto que has encontrado lo mismo que te pedian 

// busca el average 

