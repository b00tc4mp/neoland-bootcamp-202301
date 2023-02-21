

const registerUser = require('./registerUser')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const checkFileExists = require('../utils/checkFileExists')
const fs = require('fs')
const { expect } = require('chai')


describe('registerUser', () => {
    it('succeeds for a new user', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)
                return
            }

            const name = 'Marie Curie'
            const age = 87
            const email = 'marie@curie.com'
            const password = '123123123'

            registerUser(name, age, email, password, (error, userId) => {
                if (error) {
                    done(error)
                    return
                }
                const fileName = userId + '.json'
                const filePath = 'data/users/' + fileName

                checkFileExists(filePath, (error, exists) => {
                    if (error) {
                        done(error)
                        return
                    }
                    // verify(exists)

                    expect(exists).to.be.true
                    done()
                })
            })
        })
    })
    it('succeeds for a new user and others already exist', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

                return
            }

            const name = 'Albert Einstein'
            const age = 97
            const email = 'albert@einstein.com'
            const password = '123123123'

            const user = { name, age, email, password }

            const userJson = JSON.stringify(user) // { "name": "Marie Curie", "age": 87, "email": "marie@curie.com", "password": "123123123" }

            const { writeFile } = fs

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    done(error)

                    return
                }

                const name = 'Marie Curie'
                const age = 87
                const email = 'marie@curie.com'
                const password = '123123123'

                registerUser(name, age, email, password, (error, userId) => {
                    if (error) {
                        done(error)

                        return
                    }

                    const fileName = userId + '.json'

                    const filePath = 'data/users/' + fileName

                    checkFileExists(filePath, (error, exists) => {
                        if (error) {
                            done(error)

                            return
                        }

                        //verify(exists)
                        expect(exists).to.be.true

                        done()
                    })
                })
            })
        })
    })

    // TODO unhappy test case: register fails because user already registered
    it('fails for a new user and others already exist', done => {
        // 1. clean db
        // 2. create with writeFile a user in data/users
        // 3. call registerUser logic (you will run this in the previous writeFile callback)
        // 4. verify that registerUser sent and error to its callback (run this in registerUser callback)

        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)
                return
            }



            const name = 'Marie Curie'
            const age = 87
            const email = 'marie@curie.com'
            const password = '123123123'

            const user = { name, age, email, password }

            const userId = 'user-' + Date.now()
            const fileName = userId + '.json'
            const filePath = 'data/users/' + fileName
            const userJson = JSON.stringify(user, null, 4)

            const { writeFile } = fs


            writeFile(filePath, userJson, 'utf8', error => {
                if (error) {
                    done(error)

                    return
                }

                registerUser(name, age, email, password, (error, userId) => {

                    expect(error).to.exist
                    expect(error.message).to.equal('user already registered')
                    expect(userId).to.be.undefined
                    // verify(!!error)
                    // verify(error.message === 'user already registered')
                    // verify(!userId)
                    done()

                })
            })
        })





    })
})




