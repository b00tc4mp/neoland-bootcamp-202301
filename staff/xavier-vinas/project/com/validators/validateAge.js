function validateAge(age) {
    if (typeof age !== 'number') throw new TypeError('age is not a number')
    if (age < 18) throw new RangeError('age is under 18')
}

module.exports = validateAge