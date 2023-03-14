const CoherenceError = require('../errors/CoherenceError')

function validateRole(role) {
    if (typeof role !== 'string') throw new TypeError('role is not a string')
    if (role !== 'admin' && role !== 'client') throw new CoherenceError('role is not valid')
}

module.exports = validateRole