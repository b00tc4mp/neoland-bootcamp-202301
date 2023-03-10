const { readFile, unlink } = require('fs')

function unregisterUser(userId, password, callback) {
    // TODO
    /*
    1. read file by userId
    2. check if user passed password
    3. if not, then error
    4. if yes, then delete user file
    */

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