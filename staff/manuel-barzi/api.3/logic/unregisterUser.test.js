const { expect } = require('chai')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const checkFileExists = require('../utils/checkFileExists')
const { writeFile } = require('fs')
const unregisterUser = require('./unregisterUser')

describe('unregisterUser', () => {
    // case 0
    /*
    1. delete db
    2. create test user (writeFile)
    3. call unregisterUser
    4. check file does not exist
    */
    it('succeeds on existing user', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

                return
            }

            const name = 'Pepito Grillo'
            const age = 20
            const email = 'pepito@grillo.com'
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

                unregisterUser(userId, password, error => {
                    if (error) {
                        done(error)

                        return
                    }

                    checkFileExists(filePath, error => {
                        expect(error).to.exist

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

            unregisterUser(userId, password, error => {
                expect(error).to.exist
                expect(error.message).to.equal('user not found')

                done()
            })
        })
    })

    it('fails on existing user but wrong user id', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

                return
            }

            const name = 'Pepito Grillo'
            const age = 20
            const email = 'pepito@grillo.com'
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

                const wrongUserId = 'user-' + (Date.now() + 1)

                unregisterUser(wrongUserId, password, error => {
                    expect(error).to.exist
                    expect(error.message).to.equal('user not found')

                    done()
                })
            })
        })
    })

    it('fails on existing user but wrong password', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

                return
            }

            const name = 'Pepito Grillo'
            const age = 20
            const email = 'pepito@grillo.com'
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

                const wrongPassword = '234234234'

                unregisterUser(userId, wrongPassword, error => {
                    expect(error).to.exist
                    expect(error.message).to.equal('wrong credentials')

                    done()
                })
            })
        })
    })
})
