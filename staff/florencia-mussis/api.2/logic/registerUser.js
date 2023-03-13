const { readdir, readFile, writeFile } = require("fs")


function registerUser(name, age, email, password, callback) {

    readdir("data/users", (error, files) => { //listar los archivos q contienen los usuarios

        if (error) {
            callback(error) // si hay error lo reporta al callback de la linea 4 y se va con el return          return
        }

        let countRead = 0

        const emails = [] //para recoger todos los emails de los usuarios registrados

        files.forEach(file => { //para cada fichero lo leera
            const filePath = "data/users/" + file

            readFile(filePath, (error, content) => { //lee cada archivo

                if (error) { //si hay error lo reporta al callback de la linea 4 y se va con el return 
                    callback(error)
                    return
                }

                const user = JSON.parse(content)

                emails.push(user.email) //envia el mail al array vacio

                countRead++

                if (countRead === files.length) {
                    // termina de leer todo y quiere ver si contiene el mail
                    const alreadyRegistered = emails.some(registeredEmail => registeredEmail === email) //registeredEmail?

                    if (alreadyRegistered) {
                        const error = { message: 'user already registered' }
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

    const userId = "user-" + Date.now()
    const fileName = userId + ".json"
    const filePath = "data/users/" + fileName
    const userJson = JSON.stringify(user, null, 4) // convierte a json string y le paso el objeto, lo que debe reemplazar y los espacios

    writeFile(filePath, userJson, 'utf8', error => { //el callback solo dice si ha habido error o no, una vez que hace lo que le pedimos pone en cola el callback
        if (error) {
            callback(error)
            return //si no hay error sale del callback, con el return y no continua
        }

        callback(null, userId) // el null indica que no hay error y le da el userId que acaba de crear
    })
}

module.exports = registerUser