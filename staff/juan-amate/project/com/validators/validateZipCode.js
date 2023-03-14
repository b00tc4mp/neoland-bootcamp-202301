
function validateZipCode(zipCode) {
    if (typeof zipCode !== 'string') throw new TypeError('zipCode is not a string')
}

module.exports = validateZipCode