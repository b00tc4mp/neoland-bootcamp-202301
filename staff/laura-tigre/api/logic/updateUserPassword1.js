const { readFile, writeFile} = require('fs')

function updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, callback) {
    //TODO
    //1 readFile -> user
    //2 user.password === password
    //3 sustituir currentPassword=== newPassword
    const file = userId + '.json'
    const filePath = 'data/users/' + file

    readFile(filePath, 'utf8', (error, json) => {
        if (error) {
            callback(new Error('user not found'))

            return
        }

        const user = JSON.parse(json)

        // const user= users.find(user=> user.email=== email)
        if (user.password === currentPassword) {



            writeFile(filePath, user, 'utf8', error => {
                if (error) {
                    console.error(error.message)

                    return
                }
                callback(null)
            })



        } else {
            callback(new Error('wrong credentials'))
        }

        if (newPassword !== newPasswordRepeat) {
            callback(new Error('does not match the confirmation'))
        }

        if (currentPassword === newPassword) {
            callback(new Error('new password is equal to current password'))
        }

        if (newPassword.length < 8) {
            callback(new Error('new password length is lower than 8 characters'))
        }

        if (newPassword.includes(' ')) {
            callback(new Error('new password conteins space characters'))
        }

        user.password = newPassword
    })


}
module.exports = updateUserPassword