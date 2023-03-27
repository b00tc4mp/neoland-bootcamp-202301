function validateAmount(amount){
    if (typeof amount !== 'number') throw new TypeError('amount is not a number')
}

module.exports = validateAmount