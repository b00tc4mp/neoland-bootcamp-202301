function validateMode(mode) {
    if (typeof mode !== 'string') throw new TypeError('Mode is not a string')
    if (mode !== 'viewer' && mode !== 'editor') throw new ValueError('Mode is not valid')
}

module.exports = validateMode