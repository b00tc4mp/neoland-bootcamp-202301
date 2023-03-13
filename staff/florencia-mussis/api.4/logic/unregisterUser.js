const { readFile, unlink } = require('fs')


// TODO
/*
1. read file by userId
2. check if user passed password
3. if not, then error
4. if yes, then delete user file
*/


function unregisterUser(userId, password, callback) {
    const file = userId + '.json'
    const filePath = 'data/users/' + file

    readFile(filePath, 'utf8', (error, json) => { //json es el contenido del fichero
        if (error) {
            callback(new Error('user not found'))
            return
        }

        const user = JSON.parse(json) //convertimos el user a objeto
        
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