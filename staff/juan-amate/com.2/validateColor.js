function validateColor(color) {
    if (typeof color !== 'string') throw new Error('color is not a string')
    if (color !== 'yellow' && color !== 'red' && color !== 'green' && color !== 'blue') throw new Error('color is not valid')
}

module.exports = validateColor