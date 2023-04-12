const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 40, 70)

// case 0

console.log(a.indexOf(40)) // 3

// case 0

console.log(a.indexOf(100)) // -1
