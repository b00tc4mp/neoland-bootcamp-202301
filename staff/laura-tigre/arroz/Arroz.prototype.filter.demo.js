const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

console.log(a.filter(item => item>20)) // [20,40, 60, 80, 100, 120, 140]
