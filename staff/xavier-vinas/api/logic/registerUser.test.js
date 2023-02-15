const { verify } = require('../utils/test-it')
const registerUser = require('./registerUser')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const checkFileExists = require('../utils/checkFileExists')
const { cachedDataVersionTag } = require('v8')

// case 0

function case0(done) {
    deleteAllFilesFromDirectory('data/users', error => {
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

// TODO unhappy test case: register fails because user already registered
function case1(done) {
    // 1. clean db
    deleteAllFilesFromDirectory('data/users', error => {
        if (error) {
            console.error(error.message)

            return
        }
        // 2. create with writeFile a user in data/users
        const { writeFile } = require("fs")

        const user = {
            name: "Marie Curie",
            age: 87,
            email: "marie@curie.com",
            password: "123123123"
        }

        const userId = "user-" + Date.now()
        const fileName = userId + ".json"
        const filePath = "data/users/" + fileName
        const userJson = JSON.stringify(user, null, 4)

        writeFile(filePath, userJson, "utf-8", error => {
            if (error) {
                console.error(error.message)
                return
            }
          

                // 3. call registerUser logic (you will run this in the previous writeFile callback)
                const { name, age, email, password } = user

                registerUser(name, age, email, password, (error, userId) => {
                    if (error) {
                        // 4. verify that registerUser sent and error to its callback (run this in registerUser callback)
                        console.log(error.message)
                        verify(error.message)

                        done()
                    }
                    
                })
            })

    })   
}

case0(() => {
    case1(() => {
        // ...)
        console.log('end')
    })
})