const Arroz = require('./Arroz')


// case 0

const nums = new Arroz(10, 20, 30, 40, 50)
console.log(nums.map(item => item * 10)) // Arroz { 0: 100, 1: 200, ... }

// case 1

const chars = new Arroz('a', 'b', 'c', 'd', 'e')
console.log(chars.map(item => item.toUpperCase())) // Arroz { 0: 'A', 1: 'B', ... }
