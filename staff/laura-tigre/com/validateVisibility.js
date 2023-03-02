function validateVisibility(visibility){
    if (typeof visibility !== 'string') throw new Error('visibility is not a string')
    if (visibility !== 'public' && visibility !== 'private') throw new Error('visibility value is invalid')

}

module.exports= validateVisibility