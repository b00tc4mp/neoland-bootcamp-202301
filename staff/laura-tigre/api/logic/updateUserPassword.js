const { User} = require('../data/models')

const { validateUserId,validatePassword, validateNewPassword,validateNewPasswordConfirm, ConflictError ,MissingError,AuthError} = require('com')


function updateUserPassword(userId, password, newPassword, newPasswordConfirm) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordConfirm(newPasswordConfirm)

     if (password === newPassword)
        throw new ConflictError('current password and new password are equal')
    if (newPassword !== newPasswordConfirm)
        throw new ConflictError('new password and new password repeat do not match')


    return User.findById(userId)
        .then(user => {
            if (!user) throw new MissingError(`user with id ${userId} not found`)

            if (user.password !== password) throw new AuthError('wrong credentials')

            user.password= newPassword

            return user.save()
            // return User.updateOne({ _id: new ObjectId(userId) }, { $set: { password: newPassword } })
        })




}
module.exports = updateUserPassword