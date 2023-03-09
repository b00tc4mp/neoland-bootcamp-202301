function validateAge(age) {
    if (typeof age !== 'number') throw new Error('age is not a number')
    if (age < 18) throw new Error('age is under 18')
}

module.exports = validateAge