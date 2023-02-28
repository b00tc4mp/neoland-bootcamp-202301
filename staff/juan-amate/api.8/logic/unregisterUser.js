const { readFile, unlink } = require('fs')

function unregisterUser(userId, password, callback) {
    // TODO
    // 1. readFile -> user
    // 2. password === password
    // 3. unregister o error

    const file = userId + '.json'

    const filePath = 'data/users/' + file

    readFile(filePath, 'utf8', (error, json) => {
        if (error) {
            callback(new Error('user not found'))

            return
        }

        const user = JSON.parse(json)

        if (user.password !== password) {
            callback(new Error('wrong credentials'))

            return
        }

        unlink(filePath, error => {
            if (error) {
                callback(error)

                return
            }

            callback(null)

        })
    })
}

module.exports = unregisterUser