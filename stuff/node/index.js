var a = 2;
var b = 1;
var c = a + b;

console.log(c);

// command line - node index.js
// output 3

var name = "John";

var person1 = { name: "John", age: 30 };
var person2 = { name: "Bob" };
var person3 = person1;

person3.name = "Charly";

console.log(person1);

var people = [person1, person2, person3];
console.log(typeof people);
// output: 'object'
console.log(people instanceof Array);
// output: true

// no es lo mismo que esto, pero se parece
var people2 = { 0: person1, 1: person2, 2: person3 };
