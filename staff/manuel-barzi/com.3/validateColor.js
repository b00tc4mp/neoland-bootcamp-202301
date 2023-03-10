function validateColor(color) {
    if (typeof color !== 'string') throw new Error('color is not a string')
    if (color !== 'red' && color !== 'green' && color !== 'blue' && color !== 'yellow') throw new Error('color is not valid')
}

module.exports = validateColor