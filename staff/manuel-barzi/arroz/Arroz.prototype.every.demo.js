const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70, '100')

console.log(a.every(item => item > 0)) // true
console.log(a.every(item => typeof item === 'number')) // false