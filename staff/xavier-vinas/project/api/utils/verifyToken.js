const JWT_SECRET = 'kepim kepam'
const { verify } = require('jsonwebtoken')

function verifyToken(req) {
    const token = req.headers.authorization.slice(7)

    const payload = verify(token, JWT_SECRET)

    const userId = payload.sub

    return userId
}

module.exports = verifyToken