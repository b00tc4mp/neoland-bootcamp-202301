const { writeFile, readdir, readFile } = require('fs')

function registerUser(name, age, email, password, callback) {

    readdir('data/users', (error, files) => {
        if (error) {
            callback(error)

            return
        }

        let countRead = 0

        const email = []

        files.forEach(file => {
            const filePath = 'data/users/' + file

            readFile(filePath, (error, content) => {
                if (error) {
                    callback(error)

                    return
                }

                const user = JSON.parse(content)

                email.push(user.email)

                countRead++

                if (countRead === files.length) {
                    const alreadyRegistered = emails.some(registeredEmail => registeredEmail === email)

                    if (alreadyRegistered) {
                        const error = {message: 'user already registered'}

                        callback(error)
                    } 
                }
            })
        })
    })

    const user = {
        name,
        age,
        email,
        password,
    }

    const userId = 'user-' + Date.now()

    const fileName = userId + '.json'

    const filePath = 'data/users/' + fileName 

    const userJson = JSON.stringify(user, null, 4)

    writeFile(filePath, userJson, 'utf8', error => {
        if (error) {
            callback(error)
            
            return    
        }

        callback(null, userId)
    })
}

module.exports = registerUser