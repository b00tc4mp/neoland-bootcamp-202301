const { validateUserId, validateNannyId, ExistenceError } = require('com');
const { User, Nanny } = require('../data/models')


/**
* Toggles favorite of a specific sticky
* 
* @param {string} userId The userId
* @param {string} nannyId The nanny identifier
*/

function toggleFavNanny(userId, nannyId) {
    validateUserId(userId)
    validateNannyId(nannyId)


    return Promise.all([User.findById(userId), Nanny.findById(nannyId)])
        .then(([user, nanny]) => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)

            const favs = user.favs

            const index = favs.indexOf(nannyId)

            if (index < 0)
                favs.push(nannyId)
            else
                favs.splice(index, 1)

            return user.save()


        })

}
module.exports = toggleFavNanny