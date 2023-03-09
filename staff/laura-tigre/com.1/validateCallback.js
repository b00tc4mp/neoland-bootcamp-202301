function validateCallback(callback) {
    if (typeof callback !== 'function') throw new Error('callback is not a function')
}

module.exports = validateCallback