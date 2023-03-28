const registerParticularUser = require('./registerParticularUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')

describe('registerParticularUser', () => {
    before(() => connect('mongodb://localhost:27017/myprojecttest'))

    beforeEach(() => User.deleteMany())

    it('succeeds for a valid user', () => {

    })
})
