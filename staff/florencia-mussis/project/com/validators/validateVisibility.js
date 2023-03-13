const ValueError = require('../errors/ValueError')

function validateVisibility(visibility) {
    if (typeof visibility !== 'string') throw new TypeError('Visibility is not a string')
    if (visibility !== 'public' && visibility !== 'private') throw new ValueError('Visibility is not valid')
}

module.exports = validateVisibility