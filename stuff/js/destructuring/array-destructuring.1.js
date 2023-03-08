var a = [10, 20, 30]

/*
var e0 = a[0]
var e1 = a[1]
var e2 = a[2]
*/

var [e0, e1, e2] = a // array destructuring

console.log(e0, e1, e2)


var [, e1, e2] = a // array destructuring

console.log(e1, e2)

var [e0, , e2] = a // array destructuring

console.log(e0, e2)

var [e0, e1] = a // array destructuring

console.log(e0, e1)


// VM8456:11 10 20 30
// VM8456:16 20 30
// VM8456:20 10 30
// VM8456:24 10 20