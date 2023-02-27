const { ObjectId } = require('mongodb')

/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @return {Array} The public stickies
*/

function toggleLikeSticky(userId, stickyId){
    const stickies = process.db.collection('stickies')

    return stickies.findOne({'_id':new ObjectId (stickyId)}) //que busque UNO que el id sea el que le pasamos
        .then(sticky => {
            if (!sticky) throw new Error ('sticky with id ' + stickyId + ' not found')

            const index = sticky.likes.indexOf(userId) //que pase la posicion de userId, si no lo encuentra retorna -1

            index > -1 ? sticky.likes.splice(index,1): sticky.likes.push(userId)

            return stickies.updateOne({_id: new ObjectId(stickyId)}, {$set:{likes:sticky.likes}}) // reemplaza set a diferencia de push
        })
}

module.exports = toggleLikeSticky