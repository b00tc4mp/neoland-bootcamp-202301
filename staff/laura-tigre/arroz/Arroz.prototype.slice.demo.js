const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

console.log(a.slice(1,Infinity)) //[20,30,40]
console.log(a.slice(-2)) // [60,70]