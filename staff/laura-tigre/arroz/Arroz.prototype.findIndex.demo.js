const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

console.log(a.findIndex((item => item === 30))) //[2]
