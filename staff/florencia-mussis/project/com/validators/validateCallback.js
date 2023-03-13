function validateCallback(callback) {
    if (typeof callback !== 'function') throw new Error('Callback is not a function')
}

module.exports = validateCallback