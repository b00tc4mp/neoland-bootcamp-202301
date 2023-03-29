const Human = require('./Human')
const Woman = require('./Woman')

const wendy = new Woman('Wendy Darling')

const samantha = new Woman('Sam Wilson')

console.log(wendy)
console.log(samantha)

console.log(wendy instanceof Human)
console.log(wendy instanceof Woman)

console.log(wendy.eat())
console.log(wendy.drink())
console.log(wendy.poo())
console.log(wendy.pee())
console.log(wendy.giveBirth())
//console.log(wendy.giveSperm()) // error
