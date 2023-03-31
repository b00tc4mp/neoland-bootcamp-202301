const CoherenceError = require('../errors/CoherenceError')

function validateSigned(signed) {
    if (typeof signed !== 'boolean') throw new TypeError('signed is not true or false')
    if (signed !== 'true' && signed !== 'false') throw new CoherenceError('signed is not valid')
}

module.exports = validateSigned