/**
 * Transforms the elements from an input array by means of a callback to other elements in an output array.
 * 
 * @param {Array} array The array of elements to transform
 * @param {*} callback The callback function that transforms the elements
 * 
 * @return {Array} The array of transformed elements
 */
function transform(array, callback) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        var newArray= callback(element);
    }
    return newArray
}


// case 0

var nums = [10, 20, 30]
var mulBy1000 = (num) => { return num * 1000 }

var results = transform(nums, mulBy1000)
console.log(results) // [10000, 20000, 30000]

// case 1

var nums = [10, 20, 30]
var toStringPercent = function (num) { return num + '%' }

var results = transform(nums, toStringPercent)
console.log(results) // ['10%', '20%', '30%']

// case 2

var names = ['foo', 'bar', 'baz']
var toUpper = string => string.toUpperCase()

var results = transform(names, toUpper)
console.log(results) // ['FOO', 'BAR', 'BAZ'] 

// case 3

var radians = [Math.PI, 2 * Math.PI, -Math.PI / 2]
function toDegrees(radians) { return radians * 180 / Math.PI }

var results = transform(radians, toDegrees)
console.log(results) // [180, 360, -90]