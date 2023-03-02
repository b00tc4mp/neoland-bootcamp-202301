const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

a.reverse()
console.log(a) // Arroz {0: 70, 1: 60, 2: 50, 3: 40, 4: 30, 5: 20, 6: 10}