const registerUser = require('./registerUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')
const { FormatError } = require('com')

describe('registerUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/myliststest'))

    beforeEach(() => User.deleteMany())

    it('succeeds for an new user registered', () => {
        return registerUser('Roberto', 48, 'roberto@gmail.com', '123123123')
            .then(result => {
                expect(result._doc.email).to.equal('roberto@gmail.com')
                expect(result._doc.email).to.be.a('string')
                expect(result._doc.password).to.equal('123123123')
                expect(result._doc.password).to.be.a('string')
            })
    })

    it('fails for name is not a string', () => {
        try {
            registerUser(1, 18, 'roberto@gmail.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('Name is not a string')
        }
    })

    it('fails for age is under 18', () => {
        try {
            registerUser('Roberto', 8, 'roberto@gmail.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(RangeError)
            expect(error.message).to.equal('Age is under 18')
        }
    })

    it('fails for E-mail is not valid', () => {
        try {
            registerUser('Roberto', 18, 1, '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('E-mail is not a string')
        }
    })

    it('fails for E-mail is not valid', () => {
        try {
            registerUser('Roberto', 18, 'robertogmail.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(FormatError)
            expect(error.message).to.equal('E-mail is not valid')
        }
    })

    it('fails for password is not a string', () => {
        try {
            registerUser('Roberto', 18, 'roberto@gmail.com', 1)
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('Password is not a string')
        }
    })

    it('fails for password is shorter than 8 characters', () => {
        try {
            registerUser('Roberto', 18, 'roberto@gmail.com', '123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(RangeError)
            expect(error.message).to.equal('Password is shorter than 8 characters')
        }
    })

    after(() => disconnect())
})