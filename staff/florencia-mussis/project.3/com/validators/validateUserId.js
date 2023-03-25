function validateUserId(userId) {
    if (typeof userId !== 'string') throw new TypeError('UserId is not a string')
}

module.exports = validateUserId