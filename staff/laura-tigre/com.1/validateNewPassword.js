function validateNewPassword(NewPassword){
    if (typeof NewPassword !== 'string') throw new Error('NewPassword is not a string')
    if (NewPassword.length < 8) throw new Error('NewPassword is shorter than 8 characters')

}
module.exports= validateNewPassword