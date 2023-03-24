const CoherenceError = require('../errors/CoherenceError')

function validateRole(role) {
    if (typeof role !== 'string') throw new TypeError('role is not a string')
    if (role !== 'particular' && role !== 'photographer') throw new CoherenceError('role is not valid')
}

module.exports = validateRole