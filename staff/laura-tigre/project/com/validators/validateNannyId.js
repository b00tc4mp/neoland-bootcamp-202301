function validateNannyId(nannyId){
    if (typeof nannyId !== 'string') throw new TypeError('nannyId is not a string')
}
module.exports= validateNannyId