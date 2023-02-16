const { verify } = require('../utils/test-it')
const registerUser = require('./registerUser')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const checkFileExists = require('../utils/checkFileExists')

// case 0
function case0(done) {
    deleteAllFilesFromDirectory('data/users/', error => {
        if (error) {
            console.error(error.message)

            return
        }

        const name = 'Marie Curie'
        const age = 87
        const email = 'marie@curie.com'
        const password = '123123123'

        registerUser(name, age, email, password, (error, userId) => {
            if (error) {
                console.error(error.message)

                return
            }

            const fileName = userId + '.json'

            const filePath = 'data/users/' + fileName

            checkFileExists(filePath, (error, exists) => {
                if (error) {
                    console.error(error.message)

                    return
                }

                verify(exists)

                done()
            })
        })
    })
}

function case1(done) {
    verify(true)

    done()
}

case0(() => {
    case1(() => {
        console.log('end')
    })
})


