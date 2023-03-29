function validateSharedId(sharedId) {
    if (typeof sharedId !== 'string') throw new TypeError('SharedId is not a string')
}

module.exports = validateSharedId