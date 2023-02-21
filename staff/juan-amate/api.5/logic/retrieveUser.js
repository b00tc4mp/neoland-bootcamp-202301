const { readFile } = require('fs')

function retrieveUser (userId, callback) {

    const filePath = 'data/users/' + userId + '.json'

    readFile(filePath, 'utf8', (error, json) => {
        if (error) {
            callback(new Error('user not found'))

            return
        }

        const user = JSON.parse(json)

        delete user.password

        callback(null, user)
    })
}

module.exports = retrieveUser