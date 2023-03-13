const { readFile, unlink } = require('fs')

// TODO
// 1. readFile -> user
// 2. password === password
// 3. unregister o error

function unregisterUser(userId, password, callback) {
    const file = userId + '.json'
    const filePath = 'data/users/' + file

    readFile(filePath, 'utf8', (error, json) => {
        if (error) {
            callback(new Error('user not found'))
            return
        }

        const user = JSON.parse(json)

        if (user.password === password) {
            unlink(filePath, error => {
                if (error) {
                    callback(error)
                    return
                }

                callback(null)
            })
            
        } else {
            callback(new Error('wrong password'))
        }
    })
}

module.exports = unregisterUser