const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

console.log(a.map(item => item *2)) // [20,40, 60, 80, 100, 120, 140]
console.log(a.map(item => item +5)) // [15, 25, 35, 45, 55, 65, 75]