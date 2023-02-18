// /////////////////////// MATH

// /**
//  * Returns the max value in the array of numbers
//  *
//  * @param {array} nums The array of numbers to be multiplicados
//  * @param {number} multiplicador
//  * @return {array} array of numbers multiplicados
//  */
// function multiplicar(numbers, multiplicador){
//   var newArray = [];

//   for (var i = 0; i < numbers.length; i++){
//     newArray[i] = numbers [i] * multiplicador
//   }
//   return newArray 
// }
 

  
//   // Test
//   var lista = [10, 60, 5];
//   var numero = 2;
  
//   console.log(multiplicar(lista, numero));
  
//   var result = multiplicar([10, 60, 5], 2);
//  // output expectd = [20, 120, 10]
  
//   // var result = multiplicar([7, 3, 1], 10);
//   // // output expectd = [70, 30, 10]
  
//   // console.log(result);

  /////////////////////// MAX

//   /**
//  * Returns the max value in the array of numbers
//  * 
//  * @param {array} nums The array of numbers to get the max value from
//  * @return {number} The max value
//  */
// function max(nums){
//   var num = nums [0];
//   for( var i = 1; i < nums.length; i++){
//     if (nums[i]> num)
//     num = nums [i]
//   }

//   return num
// }
 



// // tests
// var input =[10, 20, 100, 80, 70]
 
// var result = max(input)// 100
// console.log(result)


// var result = max([1.2, 2.3, 1, 8.9, 7.8])
// console.log(result) // 8.9

// var result = max([-10, -1, -100, 100, 1000, 1000, 800])
// console.log(result) // 1000

/////////////////////// TO UPPERCASE
/**
 * Returns an new array with the elements of the given input array converted to upper case.
//  *
//  * @param {array} strings The input array to convert to upper case
//  * @return {array} The new array with the elements of the given input array converted
//  */
//   function convertToUpperCase(strings){
//     var newArray = [];
//     for (var i= 0; i< strings.length; i++){

//       newArray [i]= strings[i].toUpperCase()
//     }
//     return newArray
//   }
   


//    var results =[
//     "pepito",
//     "juanito",
//     "felipito",
//     "mafalda",
//     "anna",
//     "etc",
//   ];
  
//   console.log(convertToUpperCase(results))
  
//   // tests
  
//   convertToUpperCase(results)

  ///////////////////////// AVERAGE

  /**
 * Returns the average of an array of numbers
 *
 * @param {array} nums The numbers to extract the average from
 * @return {number} The average of the numbers
 */

function average(nums){
  var sum = 0
  for (var i = 0; i< nums.length; i++){
    sum = sum + nums[i]
  }
  return (sum/nums.length)
} 
  
  // tests
  
  var result = average([10, 20, 30]);
  console.log(result); // 20
  
  var result = average([0, 20, 30, 40, 50]);
  console.log(result); // 28
  
  var result = average([1.2, 3.4, 5.6, 7.8, 9.1]);
  console.log(result); 5.42
  
