function validateNewPasswordConfirm(newPasswordConfirm){
    if (typeof newPasswordConfirm !== 'string') throw new Error('newPasswordConfirm is not a string')
    if (newPasswordConfirm.length < 8) throw new Error('newPasswordConfirm is shorter than 8 characters')

}
module.exports= validateNewPasswordConfirm