const { connect, disconnect } = require('mongoose')
const registerPhotographer = require('./registerPhotographer')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return registerPhotographer(
            'Juan Antonio Amate Herrador',
            '12345678A',
            'Calle Antonio Muñoz Molina, 11-2-3ºC',
            '23009',
            'Jaén',
            'Jaén',
            '666777888',
            'juan@amate.com',
            '123123123',
        )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())