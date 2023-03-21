const { connect, disconnect } = require('mongoose');
const bidAuction = require('./bidAuction')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        return bidAuction('641574f46f82cc52e92f07b1', '641976dccbc54dc5b6b93f4f' , 10000149000 )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())