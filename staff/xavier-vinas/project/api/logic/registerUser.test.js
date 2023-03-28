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
                debugger
                expect(result._doc.email).to.equal('dona@florinda.com')
                expect(result._doc.email).to.be.a('string')
                expect(result._doc.password).to.equal('123123123')
                expect(result._doc.password).to.be.a('string')
            })
    })

    it('fails for name is not a string', () => {
        try {
            registerUser(1, 18, 'dona@florinda.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('name is not a string')
        }
    })

    it('fails for age is under 18', () => {
        try {
            registerUser('doña florinda', 8, 'dona@florinda.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(RangeError)
            expect(error.message).to.equal('age is under 18')
        }
    })
    it('fails for E-mail is not valid', () => {
        try {
            registerUser('doña florinda', 18, 1, '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('email is not a string')
        }
    })

    it('fails for password is not a string', () => {
        try {
            registerUser('doña florinda', 18, 'dona@florinda.com', 1)
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('password is not a string')
        }
    })

    it('fails for password is shorter than 8 characters', () => {
        try {
            registerUser('doña florinda', 18, 'dona@florinda.com', '123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(RangeError)
            expect(error.message).to.equal('password is shorter than 8 characters')
        }
    })

    

    after(() => disconnect())
})
