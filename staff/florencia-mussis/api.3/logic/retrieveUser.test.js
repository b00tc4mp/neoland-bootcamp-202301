const retrieveUser = require("./retrieveUser")
const deleteAllFilesFromDirectory = require("../utils/deleteAllFilesFromDirectory")
const fs = require("fs")
const { expect } = require("chai")


// case 0 HAPPY ;D

describe("retrieveUser", () => {
    it("succeds for an existent user", done => {
        //limpiamos db

        deleteAllFilesFromDirectory("data/users", error => {
            if (error) {
                console.error(error)
                return
            }

            const name = "Marie Curie"
            const age = 98
            const email = "marie@curie.com"
            const password = "123123123"

            const user = { name, age, email, password }

            const userJson = JSON.stringify(user)

            const { writeFile } = fs

            const userId = "user-" + Date.now()

            const file = userId + ".json"

            const userFilePath = "data/users/" + file

            writeFile(userFilePath, userJson, "utf8", error => {
                if (error) {
                    console.error(error.message)
                    return
                }
                // sin parentesis por un solo parametro 
                //nos da el error o el usuario 
                retrieveUser(userId, (error, user) => {
                    if (error) {
                        console.error(error.message)
                        return
                    }

                    expect(user.email).to.equal("marie@curie.com")
                    expect(user.age).to.equal(98)
                    expect(user.password).to.be.undefined
                    expect(user.name).to.equal("Marie Curie")

                    done()
                })
            })
        })
    })

    // case 2 unHappy 

    it("fail when user doesnt exist", done => {
        deleteAllFilesFromDirectory("data/users", error => {
            if (error) {
                console.error(error)
                return
            }

            const userId = "user-" + Date.now()

            retrieveUser(userId, (error, user) => {

                expect(error).to.exist
                expect(error.message).to.equal('user not found')
                expect(user).to.be.undefined

                done()
            })
        })
    })

    // case 3 

    it("fail because the user doesnt mach any user in the db", done => {
        deleteAllFilesFromDirectory("data/users", error => {

            if (error) {
                console.error(error)
                return
            }

            const name = "Marie Curie"
            const age = 98
            const email = "marie@curie.com"
            const password = "123123123"

            const user = { name, age, email, password }

            const userJson = JSON.stringify(user)

            const { writeFile } = fs

            const userId = "user-" + Date.now()

            const file = userId + ".json"

            const userFilePath = "data/users/" + file

            writeFile(userFilePath, userJson, "utf8", error => {
                if (error) {
                    console.error(error.message)
                    return
                }

                wrongUserId = "user-" + Date.now()

                retrieveUser(wrongUserId, (error, user) => {

                    expect(error).to.exist
                    expect(error.message).to.equal('user not found')
                    expect(user).to.be.undefined

                    done()
                })
            })
        })
    })
})



