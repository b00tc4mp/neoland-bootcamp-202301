/**
 * Returns an new array with the elements of the given input array converted to upper case.
 * 
 * @param {array} strings The input array to convert to upper case
 * @return {array} The new array with the elements of the given input array converted
 */
function convertToUpperCase(strings) {
    var array = [];
    for (var i=0; i<string.lenght; i++) {
        var stringInUppercase = string[i].convertToUpperCase(); 
        array[i] = stringInUpperCase;
    }
        return array;
    
        console.log(results)
    }   


// tests

var results = convertToUpperCase(['pepito', 'juanito', 'felipito', 'mafalda', 'anna', 'etc'])
console.log(results) // ['PEPITO', 'JUANITO', ... ]

