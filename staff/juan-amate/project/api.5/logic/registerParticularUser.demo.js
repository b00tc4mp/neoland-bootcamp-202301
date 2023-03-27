const { connect, disconnect } = require('mongoose')
const registerParticularUser = require('./registerParticularUser')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return registerParticularUser(
            'María Jiménez Jiménez',
            '12345678A',
            'Calle Salsipuedes, 1',
            '23003',
            'Ubeda',
            'Jaén',
            '666777888',
            'juan@amate.com',
            'jimenez@jimenez.com',
            '123123123',
        )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())