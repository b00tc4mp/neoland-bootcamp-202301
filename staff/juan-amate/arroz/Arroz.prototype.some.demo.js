const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

console.log(a.some(item => item > 100)) // false
console.log(a.some(item => item === 50)) // true
