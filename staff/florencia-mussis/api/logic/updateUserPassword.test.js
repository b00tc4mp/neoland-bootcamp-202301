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
    it('succees for the password was updated', done => {
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

            const userJson = JSON.stringify(user)

            const { writefile } = fs

            const userId = 'user-' + Date.now()

            const file = userId + '.json'

            const userFilePath = 'data/users/' + file

            writeFile(userFilePath, userJson, 'utf8', error => {
                if (error) {
                    console.error(error.message)
                    return
                }

                updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, error => {
                    if (error) {
                        console.error(error.message)
                        return
                    }

                    const { readFile } = fs

                    readFile(userfilePath, 'utf8', (error, json) => {
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