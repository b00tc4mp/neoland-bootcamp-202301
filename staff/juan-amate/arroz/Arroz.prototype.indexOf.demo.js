const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70, 40)

console.log(a.indexOf(30)) // 2
console.log(a.indexOf(80)) // undefined
console.log(a.indexOf(40, 4)) // 7

