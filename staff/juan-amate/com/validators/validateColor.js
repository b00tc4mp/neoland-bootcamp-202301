const CoherenceError = require('../errors/CoherenceError')

function validateColor(color) {
    if (typeof color !== 'string') throw new TypeError('color is not a string')
    if (color !== 'yellow' && color !== 'red' && color !== 'green' && color !== 'blue') throw new CoherenceError('color is not valid')
}

module.exports = validateColor
