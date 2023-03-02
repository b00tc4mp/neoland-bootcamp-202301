const Arroz = require('./Arroz')

// case 0

const a = new Arroz(10, 20, 30, 40, 50)

console.log(a.map(item => item * 2)) // Arroz { 0: 20, 1: 40, 2: 60, 3: 80, 4: 100} 


console.log(a.map(item => item / 2)) // Arroz { 0: 5, 1: 10, 2: 15, 3: 20, 4: 25}

// case 1

const b = new Arroz('a', 'b', 'c', 'd', 'e')
console.log(b.map(item => item.toUpperCase())) // Arroz { 0: 'A', 1: 'B', 2: 'C', 3: 'D, 4: 'E' }