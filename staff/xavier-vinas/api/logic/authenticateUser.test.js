const authenticateUser = require("./authenticateUser")
const deleteAllFilesFromDirectory = require("../utils/deleteAllFilesFromDirectory")
const fs = require("fs")
const { expect } = require("chai")


// case 0 
describe("authenticateUser", () => {
    it("succeds for an existent user", done => {
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
            // barra porque despues va el file
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

                    // verify(typeof userId === "string")
                    expect(userId).to.be.a('string')
                    // verify(userId.startsWith("user-")
                    expect(userId.startsWith('user-')).to.be.true
                    done()

                })
            })

        })
    })

    // case 1
    it("fails when user does not exists", done => {
        deleteAllFilesFromDirectory("data/users", error => {
            if (error) {
                console.error(error)
                return
            }
            // 2. authenticate user
            const email = 'marie@curie.com'
            const password = '123123123'

            authenticateUser(email, password, (error, userId) => {
               
                // verify(!!error)
                expect(error).to.exist
                // verify(error.message === 'user not found')
                expect(error.message).to.equal('user not found')
                // verify(!userId)
                expect(userId).to.be.undefined

                done()
            })

        })

    })
    // case 2
    it("fails for an existen user email is wrong", done => {
        deleteAllFilesFromDirectory('data/users', error => {
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

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    console.error(error.message)

                    return
                }

                const emailWrong = 'mari@curie.com'

                authenticateUser(emailWrong, password, (error, userId) => {
                    expect(error).to.exist
                    expect(error.message).to.equal('user not found')
                    expect(userId).to.be.undefined

                    done()
                })
            })
        })

    })
    // case 3
    it("fails for an existent user password is wrong", done => {
        deleteAllFilesFromDirectory('data/users', error => {
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

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    console.error(error.message)

                    return
                }

                const passwordWrong = '123123123_'

                authenticateUser(email, passwordWrong, (error, userId) => {
                    expect(error).to.exist
                    expect(error.message).to.equal('wrong credentials')
                    expect(userId).to.be.undefined

                    done()
                })
            })
        })
    })

})



