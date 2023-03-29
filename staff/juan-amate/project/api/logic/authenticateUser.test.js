const authenticateUser = require('./authenticateUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')
const { ExistenceError, AuthError } = require('com')

describe('authenticateUser', () => {
    before(() => connect('mongodb://127.0.0.1:27017/projectdbtest'))

    beforeEach(() => {
        return User.deleteMany()
            .then(() => {
                const user = new User({
                    name: 'Juan Amate',
                    nationalId: '123456789A',
                    role: 'photographer',
                    address: 'Calle 123',
                    zipCode: '12345',
                    city: 'Madrid',
                    province: 'Madrid',
                    phone: '1234567890',
                    email: 'juan@amate.com',
                    password: '123123123'
                })

                return user.save()
            })
    })

    it('succeeds for an existing user and correct credentials', () => {
        const name = 'Peter Pan'
        const nationalId = '1234567890A'
        const role = 'particular'
        const address = '123 Main St'
        const zipCode = '12345'
        const city = 'Ubeda'
        const province = 'Jaén'
        const phone = '123456789'
        const photographer = 'juan@amate.com'
        const email = 'peter@pan.com'
        const password = '123123123'

        return User.create({ name, nationalId, role, address, zipCode, city, province, phone, photographer, email, password })
            .then(user => {
                return authenticateUser(email, password)
                    .then(userId => {
                        expect(userId).to.be.a('string')
                        expect(userId).to.equal(user.id)
                    })
            })
    })

    it('fails for an existing user and incorrect email', () => {
        const email = 'efpyi@example.com'
        const password = '123123123'

        return User.create({ email, password })
            .then(user => {
                return authenticateUser('abc' + email, password)
                    .catch(error => {
                        expect(error).to.be.exist
                        expect(error).to.be.instanceOf(ExistenceError)
                        expect(error.message).to.equal('user not found')
                    })
            })
    })

    after(() => disconnect())
})
