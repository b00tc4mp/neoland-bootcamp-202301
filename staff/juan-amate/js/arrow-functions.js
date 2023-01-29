//function sum(a, b) { return a + b }
//var sum = function(a, b) { return a + b }
//var sum = (a, b) => { return a + b }
var sum = (a, b) => a + b

console.log(sum(10, 20))


//function hello(name) { return 'hello ' + name }
//var hello = function(name) { return 'hello ' + name }
//var hello = (name) => { return 'hello ' + name }
//var hello = (name) => 'hello ' + name
var hello = name => 'hello ' + name

console.log(hello('pepi'))
//VM6498:6 30
//VM6498:15 hello pepi