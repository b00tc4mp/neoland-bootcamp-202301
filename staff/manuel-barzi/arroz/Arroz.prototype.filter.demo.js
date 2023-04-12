const Arroz = require('./Arroz')


// case 0

const nums = new Arroz(10, 20, 30, 40, 50)
console.log(nums.filter(item => item > 20)) // Arroz { 0: 30, 1: 40, ... }

// case 1

const names = new Arroz('ana', 'berta', 'caro', 'dana', 'elena')
console.log(names.filter(item => item.includes('n'))) // Arroz { 0: 'ana', 1: 'dana', ... }
