const authenticateUser = require('./authenticateUser')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')

const fs = require('fs')
const { expect } = require('chai')

describe('authenticateUser', () => {
    it('succeeds for an existent user', done => {
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

                authenticateUser(email, password, (error, userId) => {
                    if (error) {
                        done(error)

                        return
                    }


                    // verify(typeof userId === 'string')//esta verificando si userid es un string

                    expect(userId).to.be.a('string')
                    // verify(userId.startsWith('user-'))
                    expect(userId.startsWith('user-')).to.be.true
                    done()
                })
            })

        })
    })
    it('fails when user does not exist', done => {

        // 1. delete all files
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)

                return
            }
            const email = 'marie@curie.com'
            const password = '123123123'

            authenticateUser(email, password, (error, userId) => {

                // verify(!!error)
                // verify(error.message === 'user not found')
                // verify(!userId)

                expect(error).to.exist
                expect(error.message).to.equal('user not found')
                expect(userId).to.be.undefined
                done()
            })

        })

    })
    it('fails for an existent user email is wrong', done => {
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
                const emailWrong = 'mari@curie.com'
                authenticateUser(emailWrong, password, (error, userId) => {

                    // verify(!!error)
                    // verify(error.message === 'user not found')
                    // verify(!userId)

                    expect(error).to.exist
                    expect(error.message).to.equal('user not found')
                    expect(userId).to.be.undefined
                    done()
                })




            })

        })
    })
    it('fails for an existent user password is wrong', done=>{
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
                const passwordWrong = 'mari@curie.com'
                authenticateUser(email, passwordWrong, (error, userId) => {

                    // verify(!!error)
                    // verify(error.message === 'user not found')
                    // verify(!userId)

                    expect(error).to.exist
                    expect(error.message).to.equal('wrong credentials')
                    expect(userId).to.be.undefined
                    done()
                })




            })
        })

    })
})        