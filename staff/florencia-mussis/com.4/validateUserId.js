function validateUserId(userId) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
}

module.exports = validateUserId