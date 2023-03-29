const Human = require('./Human')
const Man = require('./Man')
const Woman = require('./Woman')

const peter = new Man('Peter Pan')

const john = new Man('John Doe')

console.log(peter)
console.log(john)

console.log(peter instanceof Human)
console.log(peter instanceof Man)
console.log(peter instanceof Woman)

console.log(peter.eat())
console.log(peter.drink())
console.log(peter.poo())
console.log(peter.pee())
console.log(peter.giveSperm())
//console.log(peter.giveBirth()) // error