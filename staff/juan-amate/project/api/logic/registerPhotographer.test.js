const registerPhotographer = require('./registerPhotographer')
const { expect } = require('chai')
const { connect, disconnect } = require('mongoose')
const { User } = require('../data/models')

describe('registerPhotographer', () => {
    before(() => connect('mongodb://127.0.0.1:27017/projectdbtest'))

    beforeEach(() => User.deleteMany())

    it('succeeds for a new user', () => {
        return registerPhotographer('Peter Pan', '12345678U', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'juan@amate.com', '123123123')

            .then(result => {
                expect(result._doc.email).to.equal('juan@amate.com')
                expect(result._doc.email).to.be.a('string')
                expect(result._doc.password).to.equal('123123123')
                expect(result._doc.password).to.be.a('string')
            })
    })

    it('fails for name is not a string', () => {
        try {
            registerPhotographer(12343, '12345678U', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'foto@foto.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('name is not a string')
        }
    })

    it('fails for nationalId is not a string', () => {
        try {
            registerPhotographer('Peter Pan', 12345678, 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'foto@foto.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('nationalId is not a string')
        }
    })

    it('fails for address is not a string', () => {
        try {
            registerPhotographer('Peter Pan', '12345678A', 123, '12345', 'Jaén', 'Jaén', '666555444', 'foto@foto.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('address is not a string')
        }
    })

    it('fails for zipCode is not a string', () => {
        try {
            registerPhotographer('Peter Pan', '12345678A', 'Calle Maestra, 2', 12345, 'Jaén', 'Jaén', '666555444', 'foto@foto.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('zipCode is not a string')
        }
    })

    it('fails for city is not a string', () => {
        try {
            registerPhotographer('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 123123, 'Jaén', '666555444', 'foto@foto.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('city is not a string')
        }
    })

    it('fails for province is not a string', () => {
        try {
            registerPhotographer('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 12345, '666555444', 'foto@foto.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('province is not a string')
        }
    })

    it('fails for phone is not a string', () => {
        try {
            registerPhotographer('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', 666555444, 'foto@foto.com', '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('phone is not a string')
        }
    })

    it('fails for zipCode is not a string', () => {
        try {
            registerPhotographer('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 12345, '123123123')
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('email is not a string')
        }
    })

    it('fails for zipCode is not a string', () => {
        try {
            registerPhotographer('Peter Pan', '12345678A', 'Calle Maestra, 2', '12345', 'Jaén', 'Jaén', '666555444', 'foto@foto.com', 123123123)
        } catch (error) {
            expect(error).to.exist
            expect(error).to.be.instanceOf(TypeError)
            expect(error.message).to.equal('password is not a string')
        }
    })

    after(() => disconnect())
})
