function validateColor(color) {
    if (typeof color !== 'string') throw new Error('color is not a string')
    if (color !== 'red' && color !== 'green' && color !== 'yellow' && color !== 'orange' && color !== 'purple' && color !== 'blue') throw new Error('color is not valid')
}

module.exports = validateColor
