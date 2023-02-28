const { readdir, readFile} = require('fs')

function authenticateUser(email, password, callback) {
    readdir('data/users', (error, files) => {
        if (error) {
            callback(error)

            return
        }

        if(!files.length) {
            callback(new Error('user not found'))

            return
        }

        const users = []

        let countReads = 0
        
        files.forEach(file => {
            const filePath = 'data/users/' + file

            readFile(filePath, 'utf8', (error, json) => {
                if (error) {
                    callback(error)

                    return
                }

                const user = JSON.parse(json)
                const userId = file.slice(0, -5)

                const user2 = {
                    id: userId,
                    email: user.email,
                    password: user.password
                }

                users.push(user2)

                countReads++

                if (countReads === files.length) {
                    const user = users.find(user => user.email === email)

                    if(!user) {
                        callback(new Error('user not found'))

                        return
                    }

                    if (user.password !== password) {
                        callback(new Error('wrong credentials'))

                        return
                    }

                    callback(null, user.id)
                }
            })
        })
    })
}

module.exports = authenticateUser