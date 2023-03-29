function validateToken(token) {
    if (typeof token !== 'string') throw new Error('Token is not a string')
}

module.exports = validateToken