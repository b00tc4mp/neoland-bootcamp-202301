const { connect, disconnect } = require('mongoose')
const createContract = require('./createContract')

connect('mongodb://127.0.0.1:27017/projectdb')
  .then(() => {
    return createContract(
      '64104acac07dfdf7e74607c4',
      new Date(),
      'Full wedding coverage',
      2500,
      new Date('2024-05-25T12:30:00.000Z'),
      'Catedral de Sevilla',
      'Plaza de la Constitución, 1',
      '12345',
      'Sevilla',
      'Sevilla',
      'Jardines de la Plaza de España',
      'Plaza de España, 1',
      '23456',
      'Sevilla',
      'Sevilla',
      'Cortijo Madroño',
      'Carretera de Aljarafe, km.14',
      '34567',
      'Dos Hermanas',
      'Sevilla',
      'Hotel Alfonso XIII',
      'Calle Maestra, 54',
      '45678',
      'Sevilla',
      'Sevilla',
      'Alvaro Cruz Olmedo',
      '87654321Z',
      '666888999',
      'alvaro@cruz.com',
      'Hotel Renacimiento',
      'Avenida de la Investigación, 154',
      '56789',
      'Mairena de Aljarafe',
      'Sevilla'
    )
  })
  .then(result => console.log(result))
  .catch(error => console.error(error))
  .finally(() => disconnect())
