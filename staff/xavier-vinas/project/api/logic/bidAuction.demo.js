const { connect, disconnect } = require('mongoose');
const bidAuction = require('./bidAuction')

connect('mongodb://127.0.0.1:27017/subastadb')
    .then(() => {
        return bidAuction('6412dd0f266b2f321035f498', '641c332ff364c0b200e338b4' , 60000000 )
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())