const unregisterUser = require('./unregisterUser')
const deleteAllFilesFromDirectory = require('../utils/deleteAllFilesFromDirectory')
const fs = require('fs')
const { expect } = require('chai')

// case 0
// 1. delete db
// 2. create test user (writeFile)
// 3. call unregisterUser function
// 4. check file does not exist 

describe('unregisterUser', () => {
    it('succees for a deleted user', done => {
        deleteAllFilesFromDirectory('data/users', error => {
            if (error) {
                console.error(error.message)
                return
            }

            const name = 'Marie Curie'
            const age = 87
            const email = 'marie@curie.com'
            const password = '123123123'

            const user = {name, age, email, password}

            const userJson = JSON.stringify(user)

            const { writeFile } = fs

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    console.error(error.message)
                    return
                }

                unregisterUser(userId, password, error => {
                    if (error) {
                        console.error(error.message)
                        return
                    }

                    const { readdir } = fs

                    readdir('data/users', (error, files) => {
                        if (error) {
                            callback(error)
                            return
                        }
                        
                        const fileIsDeleted = !files.some(fileDb => fileDb === file)

                        expect(fileIsDeleted).to.be.true
                      
                        done()
                    })
                })
            })
        })
    })
})