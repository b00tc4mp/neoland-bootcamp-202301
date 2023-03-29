const registerParticularUser = require('./registerParticularUser')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')

describe('registerParticularUser', () => {
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

    it('succeeds for a new user', () => {
        return registerParticularUser('Peter Pan', '12345678U', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'juan@amate.com', 'peter@pan.com', '123123123')
            .then(result => {
                expect(result._doc.email).to.equal('peter@pan.com')
                expect(result._doc.email).to.be.a('string')
                expect(result._doc.password).to.equal('123123123')
                expect(result._doc.password).to.be.a('string')
            })
    })

    it('fails for name is not a string', () => {
        try {
            registerParticularUser(12343, '12345678U', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'juan@amate.com', 'peter@pan.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('name is not a string')
        }
    })

    it('fails for nationalId is not a string', () => {
        try {
            registerParticularUser('Peter Pan', 12345678, 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'juan@amate.com', 'peter@pan.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('nationalId is not a string')
        }
    })

    it('fails for address is not a string', () => {
        try {
            registerParticularUser('Peter Pan', '12345678A', 123, '12345', 'Jaén', 'Jaén', '666555444', 'juan@amate.com', 'peter@pan.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('address is not a string')
        }
    })

    it('fails for zipCode is not a string', () => {
        try {
            registerParticularUser('Peter Pan', '12345678A', 'Calle Maestra, 2', 12345, 'Jaén', 'Jaén', '666555444', 'juan@amate.com', 'peter@pan.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('zipCode is not a string')
        }
    })

    it('fails for city is not a string', () => {
        try {
            registerParticularUser('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 123123, 'Jaén', '666555444', 'juan@amate.com', 'peter@pan.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('city is not a string')
        }
    })

    it('fails for province is not a string', () => {
        try {
            registerParticularUser('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 12345, '666555444', 'juan@amate.com', 'peter@pan.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('province is not a string')
        }
    })

    it('fails for phone is not a string', () => {
        try {
            registerParticularUser('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', 666555444, 'juan@amate.com', 'peter@pan.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('phone is not a string')
        }
    })

    it('fails for photographer is not a string', () => {
        try {
            registerParticularUser('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 123123, 'peter@pan.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('photographer is not a string')
        }
    })

    it('fails for email is not a string', () => {
        try {
            registerParticularUser('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'juan@amate.com', 123123, '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('email is not a string')
        }
    })

    it('fails for password is not a string', () => {
        try {
            registerParticularUser('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'juan@amate.com', 'peter@pan.com', 123123123)
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('password is not a string')
        }
    })

    after(() => disconnect())
})
