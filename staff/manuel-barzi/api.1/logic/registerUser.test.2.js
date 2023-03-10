const { verify } = require('../utils/test-it')
const { access, constants, readdir, unlink } = require('fs')
const registerUser = require('./registerUser')

// case 0

function deleteAllFilesFromDirectory(directoryPath, callback) {
    readdir(directoryPath, (error, files) => {
        if (error) {
            console.error(error.message)

            return
        }

        let countDeletions = 0

        files.forEach(file => {
            const filePath = directoryPath + '/' + file

            unlink(filePath, error => {
                if (error) {
                    console.error(error.message)

                    return
                }

                countDeletions++

                if (countDeletions === files.length) {
                    callback(null)
                }
            })
        })
    })
}

deleteAllFilesFromDirectory('data/users', error => {
    if (error) {
        console.error(error.message)

        return
    }

    // do what you want to do here...
    console.log('yes, all files deleted successfully')
})

// const name = 'Marie Curie'
// const age = 87
// const email = 'marie@curie.com'
// const password = '123123123'

// registerUser(name, age, email, password, (error, userId) => {
//     if (error) {
//         console.error(error.message)

//         return
//     }

//     const fileName = userId + '.json'

//     const filePath =  'data/users/' + fileName

//     access(filePath, constants.F_OK, error => {
//         verify(error === null)
//     })
// })