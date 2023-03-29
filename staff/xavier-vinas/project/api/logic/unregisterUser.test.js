const unregisterUser = require('./unregisterUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')
const { AuthError} = require('com')



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
                return unregisterUser(user._id.toString(),password)
                    .then(user => {
                        expect(user.id).to.be.undefined
                  
                 
                    })
            })
        
    })



    after(() => disconnect())
})
