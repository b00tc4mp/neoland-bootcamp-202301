const updateUserEmail = require('./updateUserEmail')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')


describe('updateUserEmail', () => {
    before(() => connect('mongodb://127.0.0.1:27017/subastadbtest'))

    beforeEach(() => User.findOne())

    it('succeeds for an email changed', () => {
        debugger
        return updateUserEmail('6421bf1163d6cabab8b56ce0','dona1@florinda.com', '123123123')
            .then(result => {
                expect(result._doc.userId).to.be.a('string')
                expect(result._doc.newEmail).to.equal('dona1@florinda.com')
                expect(result._doc.newEmail).to.be.a('string')
                expect(result._doc.password).to.equal('123123123')
                expect(result._doc.password).to.be.a('string')
            })
    })

    after(() => disconnect())
})
