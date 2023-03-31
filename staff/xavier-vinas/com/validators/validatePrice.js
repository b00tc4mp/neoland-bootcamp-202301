

function validatePrice(price) {
    if (typeof price !== 'number') throw new TypeError('price is not a number')
}

module.exports = validatePrice