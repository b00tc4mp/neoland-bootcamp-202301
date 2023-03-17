function validateBookServiceSelected(bookServiceSelected) {
    if (typeof bookServiceSelected !== 'boolean') throw new TypeError('bookServiceSelected is not a boolean')
}

module.exports = validateBookServiceSelected