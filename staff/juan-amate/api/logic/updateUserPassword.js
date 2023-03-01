const { ObjectId } = require('mongodb')
const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordRepeat } = require('com')

function updateUserPassword(userId, password, newPassword, newPasswordRepeat) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordRepeat(newPasswordRepeat)

    if (password === newPassword) throw new Error('current password and new password are equal')

    if (newPassword !== newPasswordRepeat) throw new Error('new password and new password repeat do not match')

    const users = process.db.collection('users')

    const filter = { _id: new ObjectId(userId) }

    return users.findOne(filter)
        .then(user => {
            if (!user) throw new Error(`user with id ${userId} not found`)

            if (user.password !== password) throw new Error('wrong credentials')

            return users.updateOne(filter, { $set: { password: newPassword } })
        })
}

module.exports = updateUserPassword
