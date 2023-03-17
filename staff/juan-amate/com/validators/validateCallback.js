const CoherenceError = require('../errors/CoherenceError')

function validateCallback(callback) {
    if (typeof callback !== 'function') throw new CoherenceError('callback is not a function')

}

module.exports = validateCallback