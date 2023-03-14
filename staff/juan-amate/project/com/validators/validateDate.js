function validateDate(date) {
    if (!(date instanceof Date)) throw new TypeError('date must be a date')
}

module.exports = validateDate
