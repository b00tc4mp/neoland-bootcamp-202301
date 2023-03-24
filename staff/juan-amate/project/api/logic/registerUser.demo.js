const { connect, disconnect } = require('mongoose')
const registerUser = require('./registerUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return registerUser(
            'María Jiménez Jiménez',
            '12345678A',
            'Calle Salsipuedes, 1',
            '23003',
            'Ubeda',
            'Jaén',
            '666777888',
            'jimenez@jimenez.com',
            '123123123',
        )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())