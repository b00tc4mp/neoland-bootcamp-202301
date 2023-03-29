const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')
const { ExistenceError, AuthError } = require('com')

describe('authenticateUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/myliststest'))

    beforeEach(() => User.deleteMany())

    it('succeeds for an existing user and correct credentials', () => {
        const name = 'Roberto'
        const email = 'roberto@gmail.com'
        const password = '123123123'
        const age = 20

        return User.create({ name, email, password, age }) // new User(...), user.save()
            .then(user => {
                return authenticateUser(email, password)
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.equal(user.id)
                    })
            })
    })

    it('fails for an existing user and incorrect email', () => {
        const name = 'Roberto'
        const email = 'roberto@gmail.com'
        const password = '123123123'
        const age = 20

        return User.create({ name, email, password, age }) // new User(...), user.save()
            .then(user => {
                return authenticateUser('xyz' + email, password)
                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(ExistenceError)
                        expect(error.message).to.equal('User not found')
                    })
            })
    })

    it('fails for an existing user and incorrect password', () => {
        const name = 'Roberto'
        const email = 'roberto@gmail.com'
        const password = '123123123'
        const age = 20

        return User.create({ name, email, password, age }) // new User(...), user.save()
            .then(user => {
                return authenticateUser(email, 'xyz' + password)
                    .catch(error => {
                        expect(error).to.exist
                        expect(error).to.be.instanceOf(AuthError)
                        expect(error.message).to.equal('Wrong credentials')
                    })
            })
    })
    after(() => disconnect())
})