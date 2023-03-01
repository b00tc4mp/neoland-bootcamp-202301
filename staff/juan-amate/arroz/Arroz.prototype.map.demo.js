const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50)

console.log(a.map(double => double * 2)) // [ 20, 40, 60, 80, 100 ]
console.log(a.map(half => half / 2)) // [ 5, 10, 15, 20, 25 ]
