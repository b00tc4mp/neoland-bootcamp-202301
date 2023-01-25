// MAP
// Crea un nuevo array con los resultados de la funcion aplicada a todos los elementos

var numbers = [1, 5, 10, 15];
// var doubles = numbers.map(function (mult) {
//  return mult * 2;
// });
var doubles = numbers.map((mult) => mult * 2);

// doubles is now [2, 10, 20, 30]
console.log(doubles);

var numbers = [1, 4, 9];
// var roots = numbers.map(function (num) {
//   return Math.sqrt(num);
// });
var roots = numbers.map((num) => Math.sqrt(num));

// roots is now [1, 2, 3]
console.log(roots);

var materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
console.log(materials.map((numChar) => numChar.length));

// FILTER
// Crea un nuevo array con todos los elementos que cumplen la condición

var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

var result = words.filter((word) => word.length > 6);

console.log(result);

// FIND
// Devuelve el valor del primer elemento del array que cumple la condición

var nums = [5, 12, 8, 130, 44];

var found = nums.find((num) => num > 10);

console.log(found);

// EVERY
// Determina si todos los elementos de un array cumplen una condición

var nums = [1, 30, 39, 29, 10, 13];

var isBelowThreshold = (currentValue) => currentValue < 40;

console.log(nums.every(isBelowThreshold));

// SOME
// Determina si al menos un elemento del array cumple una condición

var nums = [1, 2, 3, 4, 5];

var even = (element) => element % 2 === 0;

console.log(nums.some(even));

var materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

var count = (element) => element.length > 7;

console.log(materials.some(count));

// INCLUDES
// Determina si incluye un determinado elemento, devuelve booleano

var materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

console.log(materials.includes("Helium"));
