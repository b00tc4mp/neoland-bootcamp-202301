const registerUser = require('./registerUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')


describe('registerUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/subastadbtest'))

    beforeEach(() => User.deleteMany())

    it('succeeds for an new user registered', () => {
        return registerUser('doña florinda', 48, 'dona@florinda.com', '123123123', 'doña florinda', 123412341234, 978, 1234)
            .then(result => {
                expect(result._doc.email).to.equal('dona@florinda.com')
                expect(result._doc.email).to.be.a('string')
                expect(result._doc.password).to.equal('123123123')
                expect(result._doc.password).to.be.a('string')
            })
    })

    after(() => disconnect())
})
