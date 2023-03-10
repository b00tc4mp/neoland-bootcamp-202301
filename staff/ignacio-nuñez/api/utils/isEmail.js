const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

function isEmail(email) {
    return EMAIL_REGEX.test(email)
}

module.exports = isEmail