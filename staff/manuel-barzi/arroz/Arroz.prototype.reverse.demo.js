const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50)

// case 0

a.reverse()
console.log(a) // Arroz { 0: 50, 1: 40, 2: 30, 3: 20, 4: 10, length: 5 }
