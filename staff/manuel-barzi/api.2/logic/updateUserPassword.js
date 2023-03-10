const { readFile, writeFile } = require('fs')

function updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, callback) {
    // TODO
    /*
    0. check new password equals new password repeat
    1. read file
    2. check current password equals user password
    3. update user password with new password
    4. update file
    */
    if (currentPassword === newPassword) {
        callback(new Error('current password and new password are equal'))

        return 
    }

    if (newPassword !== newPasswordRepeat) {
        callback(new Error('new password and new password repeat do not match'))

        return
    }

    const file = userId + '.json'

    const filePath = 'data/users/' + file

    readFile(filePath, 'utf8', (error, json) => {
        if (error) {
            callback(new Error('user not found'))

            return
        }

        const user = JSON.parse(json)

        if (user.password !== currentPassword) {
            callback(new Error('wrong credentials'))

            return
        }

        user.password = newPassword

        const newJson = JSON.stringify(user)

        writeFile(filePath, newJson, 'utf8', error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)
        })
    })
}

module.exports = updateUserPassword