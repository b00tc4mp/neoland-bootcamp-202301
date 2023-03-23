const { connect, disconnect } = require('mongoose')
const insertPhotoNanny = require('./insertPhotoNanny')

connect('mongodb://127.0.0.1:27017/kangaroo')
    .then(() => {
        return insertPhotoNanny('641adfcbd2e17978d7935e93','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GApb7Hicsng2LwXD0HQVLr6Mb3OM5My0rQ&usqp=CAU')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())