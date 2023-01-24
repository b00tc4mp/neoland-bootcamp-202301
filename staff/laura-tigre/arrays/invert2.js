/**
 * Inverts the elements of an array into a new array
 * It is based on Array.prototype.reverse
 * 
 * @param {Array} array The array to invert the elements of
 * @return {Array} The new array with the elements inverted
 */
function invert(array) {
 var result=[]
 for (var i=0; Math.floor(i<array.length/2); i++){
    var inicial= array[i]
    var final= array[array.length -1 -i]

    result [i]= final
    result[array.length -1 -i]= inicial
    if(array.length %2 ===1){
        result [Math.floor(array.length/2)] = array[Math.floor(array.length/2)]
    }

 }
 return result
}
  


// tests

// case 0

var nums = [10, 20]
var results = invert(nums)
console.log(results) // [20, 10]

// case 1

var nums = [10, 20, 30]
var results = invert(nums)
console.log(results) // [30, 20, 10]

// case 2

var nums = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var results = invert(nums)
console.log(results) // ['i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a']