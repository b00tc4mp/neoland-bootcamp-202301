const { expect } = require('chai')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const { writeFile, readFile } = require('fs')
const updateUserPassword = require('./updateUserPassword')

// TODO update

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
                done(error)

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
                    done(error)

                    return
                }

                const newPassword = '234234234'
                const newPasswordRepeat = '234234234'

                updateUserPassword(userId, password, newPassword, newPasswordRepeat, error => {
                    if (error) {
                        done(error)

                        return
                    }

                    readFile(filePath, 'utf8', (error, json) => {
                        if (error) {
                            done(error)

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

    it('fails on non existing user', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

                return
            }

            const password = '123123123'

            const userId = 'user-' + Date.now()

            const newPassword = '234234234'
            const newPasswordRepeat = '234234234'

            updateUserPassword(userId, password, newPassword, newPasswordRepeat, error => {
                expect(error).to.exist
                expect(error.message).to.equal('user not found')

                done()
            })
        })
    })

    it('fails on existing user and incorrect credentials', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

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
                    done(error)

                    return
                }

                const wrongPassword = '345345345'
                const newPassword = '234234234'
                const newPasswordRepeat = '234234234'

                updateUserPassword(userId, wrongPassword, newPassword, newPasswordRepeat, error => {
                    expect(error).to.exist
                    expect(error.message).to.equal('wrong credentials')

                    done()
                })
            })
        })
    })

    it('fails on existing user and new password does not match repetition', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

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
                    done(error)

                    return
                }

                const newPassword = '234234234'
                const newPasswordRepeat = '23423423'

                updateUserPassword(userId, password, newPassword, newPasswordRepeat, error => {
                    expect(error).to.exist
                    expect(error.message).to.equal('new password and new password repeat do not match')

                    done()
                })
            })
        })
    })

    it('fails on existing user and new password equals current password', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

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
                    done(error)

                    return
                }

                const newPassword = password
                const newPasswordRepeat = password

                updateUserPassword(userId, password, newPassword, newPasswordRepeat, error => {
                    expect(error).to.exist
                    expect(error.message).to.equal('current password and new password are equal')

                    done()
                })
            })
        })
    })
})