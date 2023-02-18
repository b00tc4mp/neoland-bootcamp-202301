const { writeFile, readFile } = require('fs')

function updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, callback) {
    //TODO
    //1 readFile -> user
    //2 user.password === password
    //3 sustituir currentPassword=== newPassword

    const file = userId + '.json'
    const filePath = 'data/users/' + file

    readFile(filePath, 'utf8', (error, json) => {
        if (error) {
            callback(error)

            return
        }

        const user = JSON.stringify(json)

        if (user.password === currentPassword) {

            writeFile(filePath, user, 'utf8', (error => {
                if (error) {
                    callback(error)

                    return
                }
                if (user.password === newPassword && newPassword === newPasswordRepeat) {
                    callback(null)
                }
              

            }))
        
        }

    })

}
module.exports = updateUserPassword