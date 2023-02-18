/**
 * Returns the average of an array of numbers
 *
 * @param {array} nums The numbers to extract the average from
 * @return {number} The average of the numbers
 */

function average(nums) {
  var sum = 0;
  for (var i = 0; i < nums.length; i++) {
    var num = nums[i];
    sum = sum + num;
  }
  var averageCalculated = sum / nums.length;
  return averageCalculated;
}

// tests

var result = average([10, 20, 30]);
console.log(result); // 20

var result = average([0, 20, 30, 40, 50]);
console.log(result); // 28

var result = average([1.2, 3.4, 5.6, 7.8, 9.1]);
console.log(result); // 5.42
