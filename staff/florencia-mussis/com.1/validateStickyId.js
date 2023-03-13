function validateStickyId(stickyId) {
    if (typeof stickyId !== 'string') throw new Error('stickyId is not a string')
}

module.exports = validateStickyId