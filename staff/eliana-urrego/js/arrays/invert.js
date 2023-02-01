/**
 * Inverts the elements of an array into a new array
 * It is based on Array.prototype.reverse
 * 
 * @param {Array} array The array to invert the elements of
 * @return {Array} The new array with the elements inverted
 */
function invert(array) {
    var newArray = []
    var limit = Math.floor(array.length / 2)

    if (array.length % 2 !== 0)
        newArray[limit] = array[limit]


    for (var i = 0; i < limit; i++) {
        newArray[i] = array[array.length - 1 - i]
        newArray[array.length - 1 - i] = array[i]
    }

    return newArray
}
// tests

//function invert(array){
//newArray=[]
//var temp=array;
//array=newArray;
//newArray=temp

//}

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