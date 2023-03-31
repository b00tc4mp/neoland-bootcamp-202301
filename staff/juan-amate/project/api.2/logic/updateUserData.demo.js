const { connect, disconnect } = require('mongoose')
const updateUserData = require('./updateUserData')

connect('mongodb://127.0.0.1:27017/projectdb')
    .then(() => {
        return updateUserData(
            '641089dfdec56944ce04f875',
            'Cara Dura',
            '11111111Q',
            'Avenida de Andalucia, 1',
            '23006',
            'Jaén',
            'Jaén',
            '616616616')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())