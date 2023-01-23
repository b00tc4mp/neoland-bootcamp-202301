var nums = [10, 20, 30, 40, 50]
var chars = ['a', 'b', 'c', 'd', 'e']
var staff = ['Lau', 'Flor', 'Xavi', 'Juan', 'Eli']
/*
for (var i = 0; i < nums.length; i++) {
    var num = nums[i]

    console.log(num)
}
*/
/*
function forEachElementConsoleLog(array) {
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
    
        console.log(element)
    }
}
forEachElementConsoleLog(nums)
forEachElementConsoleLog(chars)
*/

function forEachElement(array, callback) { // Lau
    for (var i = 0; i < array.length; i++) {
        var element = array[i]
    
        callback(element)
    }
}

/*
forEachElement(nums, function(element) { console.log(element) })

forEachElement(nums, function(element) {
    console.log(element * 10)
})
*/
º { console.log(num * 100) } // Flor
function divBy100AndPrint(num) { console.log(num / 100) } // Xavi
function toUpperAndPrint(string) { console.log(string.toUpperCase()) } // Eli
function wrapInBracketsAndPrint(string) { console.log('[' + string + ']') } // Juan

//mulBy100AndPrint(10)
//divBy100AndPrint(10)
//toUpperAndPrint('hOla')
//wrapInBracketsAndPrint('hello')

//forEachElement(nums, mulBy100AndPrint)
//forEachElement(nums, divBy100AndPrint)
//forEachElement(chars, toUpperAndPrint)
//debugger
forEachElement(staff, wrapInBracketsAndPrint)

// VM5423:45 [Lau]
// VM5423:45 [Flor]
// VM5423:45 [Xavi]
// VM5423:45 [Juan]
// VM5423:45 [Eli]