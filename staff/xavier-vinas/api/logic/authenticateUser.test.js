const authenticateUser = require("./authenticateUser")
const deleteAllFilesFromDirectory = require("../utils/deleteAllFilesFromDirectory")
const fs = require("fs")
const { verify } = require("../utils/test-it")


// case 0 

function test0(done) {

    deleteAllFilesFromDirectory("data/users", error => {
        if (error) {
            console.error(error)
            return
        }
        const name = 'Marie Curie'
        const age = 87
        const email = 'marie@curie.com'
        const password = '123123123'

        const user = { name, age, email, password }

        const userJson = JSON.stringify(user)

        const { writeFile } = fs

        const userId = "user-" + Date.now()

        const file = userId + ".json"

        const userFilePath = "data/users/" + file
        writeFile(userFilePath, userJson, "utf-8", error => {
            if (error) {
                console.error(error.message)
                return
            }
            authenticateUser(email, password, (error, userId) => {
                if (error) {
                    console.error(error.message)
                    return
                }

                verify(typeof userId === "string")
                verify(userId.startsWith("user-"))

                done()

            })
        })

    })
}

function test1(done) {
    // 1. delete all files

    deleteAllFilesFromDirectory("data/users", error => {
        if (error) {
            console.error(error)
            return
        }
        const email = 'marie@curie.com'
        const password = '123123123'

        authenticateUser(email, password, (error, userId) => {

            verify(!!error)
            verify(error.message === 'user not found')
            verify(!userId)
            done()
        })
    })

    // 2. authenticate user
    // 3. verify error
}

test0(() => {
    test1(() => {
        console.log('end')
    })

})