const { expect } = require('chai')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const { writeFile, readFile } = require('fs')
const updateUserPassword = require('./updateUserPassword')

describe('updateUserPassword', () => {
    // case 0
    /*
    1. delete db
    2. create test user (writeFile)
    3. call updateUserPassword
    4. when finished, readFile user file, and check (expect) user.password is equal to newPassword
    */
    it('succeeds on existing user and correct credentials', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                console.error(error.message)

                return
            }

            const name = 'Papa Gayo'
            const age = 78
            const email = 'papa@gayo.com'
            const password = '123123123'

            const user = { name, age, email, password }

            const json = JSON.stringify(user)

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const filePath = 'data/users/' + file

            writeFile(filePath, json, 'utf8', error => {
                if (error) {
                    console.error(error.message)

                    return
                }

                const newPassword = '234234234'
                const newPasswordRepeat = '234234234'

                updateUserPassword(userId, password, newPassword, newPasswordRepeat, error => {
                    if (error) {
                        console.error(error.message)

                        return
                    }

                    readFile(filePath, 'utf8', (error, json) => {
                        if (error) {
                            console.error(error.message)

                            return
                        }

                        const user = JSON.parse(json)

                        expect(user.password).to.equal(newPassword)

                        done()
                    })
                })
            })
        })
    })
})