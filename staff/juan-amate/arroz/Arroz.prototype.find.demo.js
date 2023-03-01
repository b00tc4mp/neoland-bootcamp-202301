const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

console.log(a.find(item => item > 45)) // 50
console.log(a.find(item => item < 60)) // 10
