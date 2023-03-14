const Arroz = require('./Arroz')

const a = new Arroz(10, 20, 30, 40, 50, 60, 70)

/*
for (let i = 0; i < a.length; i++) {
    var value = a[i]

    console.log(value)
}
*/

a.forEach(elem => console.log(elem))
