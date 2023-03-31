function validateCallback(callback) {
    if (typeof callback !== 'function') throw new ExistenceError('callback is not a function')
}

module.exports = validateCallback