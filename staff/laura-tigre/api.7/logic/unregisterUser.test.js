const unregisterUser = require('./unregisterUser')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const checKFileExists = require('../utils/checkFileExists')
const fs = require('fs')
const { expect } = require('chai')

// case 0
/*
1. delete db
2. create test user (writeFile)
3. call unregisterUser

4. check file does not exist
*/

describe('unregisterUser', () => {
    it('succees for a deleted user', done => {
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

            const userJson = JSON.stringify(user)

            const { writeFile } = fs

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    done(error)

                    return
                }

                unregisterUser(userId, password, error => {
                    if (error) {
                        done(error)

                        return
                    }



                    checKFileExists(userFilePath, error => {
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
    it('fails for an existent user wrong', done => {
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

            const userJson = JSON.stringify(user)

            const { writeFile } = fs

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    done(error)

                    return
                }

                const wrongUserId = 'user' + Date.now()

                unregisterUser(wrongUserId, password, error => {

                    expect(error).to.exist
                    expect(error.message).to.equal('user not found')

                    done()

                })
            })
        })
    })


    it('fails because password is wrong', done => {
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

            const userJson = JSON.stringify(user)

            const { writeFile } = fs

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    done(error)

                    return
                }
                const wrongPassword = '123123123_'
                unregisterUser(userId, wrongPassword, error => {
                    expect(error).to.exist
                    expect(error.message).to.equal('wrong credentials')
                    done()

                })
            })
        })

    })

})