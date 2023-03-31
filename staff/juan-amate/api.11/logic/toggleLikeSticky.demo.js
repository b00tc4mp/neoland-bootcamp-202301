const { connect, disconnect } = require('mongoose')
const toggleLikeSticky = require('./toggleLikeSticky')

connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        return toggleLikeSticky('640091726b074d4319549b8e', '6400ae5e5b7c4a934a4185c2')
    })
    .then(result => console.log(result))
    .catch(error => console.error(error))
    .finally(() => disconnect())