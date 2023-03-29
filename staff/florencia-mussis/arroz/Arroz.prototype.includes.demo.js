const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)


console.log(a.includes(100)) // false
console.log(a.includes(20)) // true