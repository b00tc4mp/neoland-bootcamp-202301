function validateAge(age) {
    if (typeof age !== 'number') throw new TypeError('Age is not a number')
    if (age < 18) throw new RangeError('Age is under 18')
}

module.exports = validateAge