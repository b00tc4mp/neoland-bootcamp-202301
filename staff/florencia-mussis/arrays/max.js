/**
 * Returns the max value in the array of numbers
 * 
 * @param {array} nums The array of numbers to get the max value from
 * @return {number} The max value
 */
function max(nums) {
    var num = nums[0];

    for(var i=1; i<nums.length; i++) {

    if (nums[i]>num){
        num = nums [i]
    }
}  
    return num
}

// tests
var input =[10, 20, 100, 80, 70]
 
var result = max(input)// 100
console.log(result)


var result = max([1.2, 2.3, 1, 8.9, 7.8])
console.log(result) // 8.9

var result = max([-10, -1, -100, 100, 1000, 1000, 800])
console.log(result) // 1000
