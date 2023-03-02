const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

// case 0

const s = a.slice(2, 5)
console.log(s) // Arroz { 0: 30, 1: 40, 2: 50, length: 3 }
