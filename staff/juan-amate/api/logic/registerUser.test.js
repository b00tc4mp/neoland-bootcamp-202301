const registerUser = require('./registerUser')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const checkFileExists = require('../utils/checkFileExists')
const fs = require('fs')
const { expect } = require('chai')

describe('registerUser', () => {
    it('succeeds for a new user', done => {
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

                    // verify(exists)
                    expect(exists).to.be.true

                    done()
                })
            })
        })
    })
})

it('succeeds for a new user and others already exist', done => {
    deleteAllFilesFromDirectory('data/users', error => {
        if (error) {
            console.error(error.message)

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

                    //verify(exists)
                    expect(exists).to.be.true

                    done()
                })
            })
        })
    })

    it('fails when user already registered', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                console.error(error.message)

                return
            }

            const name = 'Marie Curie'
            const age = 87
            const email = 'marie@curie.com'
            const password = '123123123'

            const user = { name, age, email, password }

            const userJson = JSON.stringify(user, null, 4)

            const { writeFile } = fs

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    console.error(error.message)

                    return
                }

                registerUser(name, age, email, password, (error, userId) => {
                    // verify(!!error)
                    // expect(!!error).to.be.true
                    expect(error).to.exist
                    // verify(error.message === 'user already registered')
                    expect(error.message).to.equal('user already registered')
                    // verify(!userId)
                    expect(userId).to.be.undefined

                    done()
                })
            })
        })
    })
})