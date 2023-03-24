const { connect, disconnect } = require('mongoose')
const { User, Contract, Place } = require('./models')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        const user = new User({
            name: 'Ursula Corberó',
            nationalId: '12345678A',
            role: 'particular',
            address: 'Avenida 123',
            zipCode: 12345,
            city: 'Mostoles',
            province: 'Madrid',
            phone: '666777888',
            photographerEmail: 'juan@amate.com',
            email: 'ursula2@corbero.com',
            password: '123123123',
        })

        const user1 = new User({
            name: 'María Jiménez Gómez',
            nationalId: '23456789A',
            role: 'particular',
            address: 'Avenida 123',
            zipCode: 12345,
            city: 'Marbella',
            province: 'Málaga',
            phone: '666777888',
            photographerCode: '641c85b8045fbee3bb4a6e39',
            email: 'maria2@jimenez.com',
            password: '123123123',
        })

        const user2 = new User({
            name: 'Rocío García Montes',
            nationalId: '34567890A',
            role: 'particular',
            address: 'Avenida 123',
            zipCode: 12345,
            city: 'Granada',
            province: 'Granada',
            phone: '666777888',
            photographerCode: '641c85b8045fbee3bb4a6e39',
            email: 'rocio2@garcia.com',
            password: '123123123',
        })

        return Promise.all([
            user.save(),
            user1.save(),
            user2.save()
        ])
    })
    .then(([user, user1, user2]) => {
        const preparationPlace = new Place({
            description: 'Hotel Alfonso XIII',
            address: 'Avenida 123',
            zipCode: '12345',
            city: 'Sevilla',
            province: 'Sevilla'
        })

        const ceremonyPlace = new Place({
            description: 'Catedral de Sevilla',
            address: 'Avenida 123',
            zipCode: '12345',
            city: 'Sevilla',
            province: 'Sevilla'
        })

        const sessionPlace = new Place({
            description: 'Plaza de España',
            address: '',
            zipCode: '',
            city: 'Granada',
            province: ''
        })

        const couplePreparationPlace = new Place({
            description: 'Hotel Renacimiento',
            address: 'Avenida 123',
            zipCode: '12345',
            city: 'Sevilla',
            province: 'Sevilla'
        })

        const celebrationPlace = new Place({
            description: 'Cortijo el Brujuelo',
            address: '',
            zipCode: '',
            city: 'Sevilla',
            province: ''
        })

        const contract = new Contract({
            user: user1.id,
            date: new Date,
            eventDate: new Date('2024-01-26T11:00:00.417Z'),
            ceremonyPlace: ceremonyPlace,
            sessionPlace: sessionPlace,
            celebrationPlace: celebrationPlace,
            preparationPlace: preparationPlace,
            coupleName: 'Peter Pan',
            coupleId: '45678901A',
            couplePhone: '666777888',
            coupleEmail: 'peter@pan.com',
            couplePreparationPlace: couplePreparationPlace,
        })

        return contract.save()
    })
    .then(() => disconnect())
    .catch(error => console.error(error))