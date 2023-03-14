const FormatError = require('./FormatError');

//const error = new Error('hola generic error')
//const error = new TypeError('hola type error')
const error = new FormatError('hola format error')

// console.log(error)
//console.error(error.message)

// console.log(error instanceof Object) // true
// console.log(error instanceof Error) // true
// console.log(error instanceof TypeError) // false
// console.log(error instanceof SyntaxError) // false
// console.log(error instanceof RangeError) // false
// console.log(error instanceof Date) // false
// console.log(error instanceof FormatError) // true

/*
function authenticaUser(email, password) {
    if (typeof email !== 'string') throw new TypeError('email must be a string')
    if (!email.includes('@')) throw new FormatError('email is not valid')
}
*/

function forceError() {
    //throw new Error('...')
    //throw new TypeError('...')
    throw new FormatError('...')
}

try {
    forceError()
} catch (error) {
    if (error instanceof TypeError)
        console.log('type error')
    else if (error instanceof FormatError)
        console.log('format error')
    else
        console.log('generic error')
}