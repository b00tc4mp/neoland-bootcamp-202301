function validateEventDate(eventDate) {
    if (!(eventDate instanceof Date)) throw new TypeError('date is not a date')
}

module.exports = validateEventDate
