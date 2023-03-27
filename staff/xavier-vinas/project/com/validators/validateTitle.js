

function validateTitle(title) {
    if (typeof title !== 'string') throw new TypeError('title is not a string')
}

module.exports = validateTitle