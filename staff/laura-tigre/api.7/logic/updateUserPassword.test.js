const updateUserPassword = require('./updateUserPassword')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const fs = require('fs')
const { expect } = require('chai')

// case 0
/*
1. delete db
2. create test user (writeFile)
3. call updateUserPassword
4. when finished, readFile user file, and check (expect) user.password is equal to newPassword
*/

describe('updateUserPassword', () => {
    it('succeeds for change password', done => {
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


                const newPassword = '234234234'
                const newPasswordRepeat = '234234234'


                updateUserPassword(userId, password, newPassword, newPasswordRepeat, error => {
                    if (error) {
                        done(error)
                        return
                    }

                    const { readFile } = fs

                    readFile(userFilePath, 'utf8', (error, json) => {
                        if (error) {

                            done(error)
                            return

                        }

                        const user = JSON.parse(json)

                        expect(user.password).to.equal('234234234')


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
    it('fails on existing useer and incorrect credentials', done => {
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

               
                const newPassword = password
                const newPasswordRepeat = password


                updateUserPassword(userId, password, newPassword, newPasswordRepeat, error => {
                    expect(error).to.exist
                    expect(error.message).to.to.equal('current password and new password are equal')

                    done()

                })


            })
        })

    })
})