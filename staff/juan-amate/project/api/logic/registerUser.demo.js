const { connect, disconnect } = require('mongoose')
const registerUser = require('./registerUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return registerUser(
            'Paco Mer',
            '12345678A',
            'client',
            'Calle Salsipuedes, 1',
            '23003',
            'Ubeda',
            'Jaén',
            '666777888',
            'paco@mer.com',
            '123123123',
        )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())