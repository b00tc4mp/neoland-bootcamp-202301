function validateColor(color){
    if (typeof color !== 'string') throw new Error('color is not a string')
    if (color !== 'red' && color !== 'blue'&& color !== 'green'&& color !== 'yellow' ) throw new Error('color value is invalid')

}

module.exports= validateColor