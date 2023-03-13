function validateDisponibility(disponibility){
    if (typeof disponibility !== 'string') throw new TypeError('disponibility is not a string')
}
module.exports= validateDisponibility