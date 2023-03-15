function validateDateOfBith(dateOfBith){

    if (typeof dateOfBith !== 'number') throw new TypeError('age is not a number')
    if (dateOfBith < 18) throw new RangeError('age is under 18')

}
module.exports= validateDateOfBith