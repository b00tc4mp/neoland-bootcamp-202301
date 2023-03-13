const { readdir, writeFile, readFile } = require('fs')

function registerUser(name, age, email, password, callback) {
    readdir('data/users', (error, files) => {
        if (error) {
            callback(error)
            return
        }

        if (!files.length) { // primero lista los usuarios y si no hay nada ya lo crea pq no esta registrado
            
            const user = {
                name,
                age,
                email,
                password,
            }

            const userId = 'user-' + Date.now() //define el id

            const fileName = userId + '.json' //define el archivo

            const filePath = 'data/users/' + fileName //define la ruta

            const userJson = JSON.stringify(user, null, 4) //convierte a string el objeto que contiene los datos del usuario
 
            writeFile(filePath, userJson, 'utf8', error => {
                if (error) {
                    callback(error)
                    return
                }

                callback(null, userId)
            })

            return
        }

        const emails = [] //para el caso que ya hay usuarios registrados debera comprobar (por el email) si ya esta registrado o no

        let countReads = 0

        files.forEach(file => {
            const filePath = 'data/users/' + file

            readFile(filePath, 'utf8', (error, json) => {
                if (error) {
                    callback(error)
                    return
                }

                const user = JSON.parse(json) //convierto el string user a objeto

                emails.push(user.email)

                countReads++

                if (countReads === files.length) {
                    if (emails.includes(email)) {
                        callback(new Error('user already registered'))
                        return
                    }

                    const user = {
                        name,
                        age,
                        email,
                        password,
                    }

                    const userId = 'user-' + Date.now()

                    const fileName = userId + '.json'

                    const filePath = 'data/users/' + fileName

                    const userJson = JSON.stringify(user, null, 4) //lo convierte otra vez a string para escribirlo en el archivo

                    writeFile(filePath, userJson, 'utf8', error => {
                        if (error) {
                            callback(error)
                            return
                        }

                        callback(null, userId)
                    })
                }
            })
        })
    })
}

module.exports = registerUser