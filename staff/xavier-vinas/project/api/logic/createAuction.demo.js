const { connect, disconnect } = require('mongoose')
const createAuction = require('./createAuction')



connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        const startDate = new Date()
        const endDate = new Date()
        return createAuction('640f34e97ae2e48542054e7b', 'casa', 'casa bonita', 199, 'link:linkdecosa', 54, startDate, endDate)
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())