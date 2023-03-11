const { connect, disconnect } = require('mongoose')
const { User, Client } = require('./models')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        const user = new User({
            businessName: 'Juan Amate',
            nif: '12345678A',
            address: 'Avenida 123',
            zipCode: 12345,
            city: 'Mostoles',
            region: 'Madrid',
            email: 'juan@amate.com',
            password: '123123123',
            phone: '666777888'
        })

        return user.save()
    })
    .then(() => {
        const client = new Client({
            name: 'Wendy',
            surname: 'Darling',
            phone: '666777888',
            email: 'wendy@darling.com',
            nif: '12345678A',
            address: 'Avenida 123',
            zipCode: 12345,
            city: 'Baeza',
            region: 'Jaén',
            gettingReadyAddress: 'Avenida 123',
            gettingReadyCity: 'Baeza',
            password: '123123123',
            eventDate: '2024-01-01',
            ceremony: 'Iglesia de San Juan',
            ceremonyHour: '2024-01-26T12:00:00.417',
            sessionPlace: 'Jardines Entrehiedra',
            celebration: 'Cortijo el Brujuelo',
            coupleName: 'Peter Pan',
            coupleSurname: 'Pan',
            couplePhone: '666777888',
            coupleEmail: 'peter@pan.com',
            coupleNif: '12345678A',
            coupleGettingReadyAddress: 'Avenida 123',
            coupleGettingReadyCity: 'Ubeda'
        })

        return client.save()
    })
    .then(() => disconnect())
    .catch(error => console.error(error))