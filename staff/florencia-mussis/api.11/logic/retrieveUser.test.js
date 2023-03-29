const retrieveUser = require("./retrieveUser")
const deleteAllFilesFromDirectory = require("../utils/deleteAllFilesFromDirectory")
const fs = require("fs")
const { expect } = require("chai")


describe("retrieveUser", () => {
    it("succeds for an existent user", done => {
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
                    done(error)
                    return
                }
                
                retrieveUser(userId, (error, user) => { // sin parentesis por un solo parametro 
                    if (error) {
                        done(error)
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
                    done(error)
                    return
                }

                wrongUserId = "user-" + Date.now() + 1

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






