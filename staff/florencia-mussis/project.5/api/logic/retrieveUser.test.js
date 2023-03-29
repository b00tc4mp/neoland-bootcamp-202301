const retrieveUser = require('./retrieveUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')
const { ExistenceError } = require('com')

describe('retrieveUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/myliststest'))

    beforeEach(() => User.deleteMany())

    it('succeeds for an existing user and correct retrieve', () => {
        const name = 'Roberto'
        const email = 'roberto@gmail.com'
        const password = '123123123'
        const age = 20

        return User.create({ name, email, password, age })
            .then(user => {
                return retrieveUser(user._id.toString())
                    .then(user => {
                        expect(user.id).to.be.a('string')
                        expect(user.password).to.be.undefined
                        expect(user.name).to.equal('Roberto')
                        expect(user.email).to.equal('roberto@gmail.com')
                    })
            })
    })

    it('fails for userId is not a string', () => {
        try {
            retrieveUser(32576583592)
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('UserId is not a string')
        }
    })

    it('fails for user not found', () => {
        return retrieveUser ('640ca23cba43626c02f95afc')
        .catch(error =>{
            expect(error).to.exist
            expect(error).to.be.instanceOf(ExistenceError)
            expect(error.message).to.equal('User with id 640ca23cba43626c02f95afc not found')
        })
        
    })
   
    after(() => disconnect())
})