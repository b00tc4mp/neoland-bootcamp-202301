const unregisterUser = require('./unregisterUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')
const { AuthError } = require('com')




describe('unregisterUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/subastadbtest'))

    beforeEach(() => User.deleteMany())

    it('succeeds for an  user unregistered', () => {
        const name = 'Pepito Flores'
        const email = 'pepito@flores.com'
        const password = '123123123'
        const age = 20

        return User.create({ name, email, password, age })
            .then(user => {
                return unregisterUser(user._id.toString(), password)
                    .then(() => {
                        return User.findById(user._id.toString())
                            .then(user => {
                                expect(user).to.be.null
                            })
                    })
            })
    })

    it('fails for password is not a string', () => {
        const name = 'Pepito Flores'
        const email = 'pepito@flores.com'
        const password = '123123123'
        const age = 20

        return User.create({ name, email, password, age })
            .then(user => {
                try {
                    unregisterUser(user._id.toString(), 123123123)
                } catch (error) {
                    expect(error).to.exist
                    expect(error).to.be.instanceOf(TypeError)
                    expect(error.message).to.equal('password is not a string')
                }
            })
    })

    it('fails when password is not valid', () => {
        const name = 'Pepito Flores'
        const email = 'pepito@flores.com'
        const password = '123123123'
        const age = 20

        return User.create({ name, email, password, age })
            .then(user => {
                return unregisterUser(user._id.toString(), '12312312')

                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(AuthError)
                        expect(error.message).to.equal('wrong credentials')
                    })
            })
    })
    after(() => disconnect())
})



