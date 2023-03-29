const { expect } = require('chai')  //para comprobar los resultados
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const checkFileExists = require('../utils/checkFileExists')
const { writeFile } = require('fs')
const unregisterUser = require('./unregisterUser')

// case 0
// 1. delete db
// 2. create test user (writeFile)
// 3. call unregisterUser
// 4. check file does not exist

describe('unregisterUser', () => {
    it('succeeds on existing user', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                done(error)
                return
            }

            const name = 'Marie Curie'
            const age = 87
            const email = 'marie@curie.com'
            const password = '123123123'

            const user = {name, age, email, password} //creo el objeto

            const userJson = JSON.stringify(user) // lo convierto a string

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

                    checkFileExists(userFilePath, error => {
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

            const name = 'Marie Curie'
            const age = 87
            const email = 'marie@curie.com'
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

//////////////////////// cuando la contraseña es incorrecta

    it('fails for an existent user password is wrong', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                console.error(error)
                return
            }

            const name = 'Marie Curie'
            const age = 87
            const email = 'marie@curie.com'
            const password = '123123123'

            const user = { name, age, email, password }

            const userJson = JSON.stringify(user)

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    done(error)
                    return
                }

                const passwordWrong = '123123123_'
               
                unregisterUser(userId, passwordWrong, (error, userId) => {
                    expect(error).to.exist
                    expect(error.message).to.equal('wrong credentials')

                    done ()
                })
            })
        })            
    })
}) 