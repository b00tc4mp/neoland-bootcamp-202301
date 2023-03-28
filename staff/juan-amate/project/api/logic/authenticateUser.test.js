const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')

describe('authenticateUser', () => {
    before(() => connect('mongodb://localhost:27017/projectdbtest'))

    beforeEach(() => User.deleteMany())

    it('succeeds for a valid user', () => {

    })

    it('fails for an existing user and incorrect email', () => {
        const email = 'efpyi@example.com'
        const password = '123123123'

        return authenticateUser(email, password)
            .catch(error => {
                expect(error)
            })
    })
})
