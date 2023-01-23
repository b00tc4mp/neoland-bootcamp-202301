/**
 * Returns an new array with the elements of the given input array converted to upper case.
 * 
 * @param {array} strings The input array to convert to upper case
 * @return {array} The new array with the elements of the given input array converted
 */
function convertToUpperCase(strings) {
    var array = []
    for ( i = 0 ; i < strings.length ; i++){
        var stringInUppercase = strings[i].toUpperCase () ;
        array [i]= stringInUppercase;}
        
        return array;
    }
var results = convertToUpperCase(['pepito', 'juanito', 'felipito', 'mafalda', 'anna', 'etc'])
console.log( results ) 















// tiene que devolverte un array nuevo con los nombres en mayuscula 


function convertirenUpperCase ( stringss ) {
    nuevaArray = []; // array vacia para almacenar la Nueva 

    for ( var i = 0 ; i < stringss.length ; i++){

    var pasarAupper = stringss[i].toUpperCase() ; 

    nuevaArray[i] = pasarAupper
    
    }
    return nuevaArray 
}





var personas = convertirenUpperCase (['Xavi', 'Sandra', 'Ester', 'Hector', 'Gonzalo', 'Ferran'])
console.log ( personas)