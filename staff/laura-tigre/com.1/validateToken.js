function validateToken(token) {
    if (typeof token !== 'string') throw new Error('token is not a string')
}

module.exports = validateToken