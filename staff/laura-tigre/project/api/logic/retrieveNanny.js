const { validateUserId, validateUserNannyId, ExistenceError, CoherenceError } = require('com')
const { User, Nanny ,Parent,Chat} = require('../data/models')
/**
 *retrieve nanny user if the user is the nanny or the user is a parent
 * 
 * @param {string} userId The user
 * @param {string} userNannyId The nanny user id
 */
function retrieveNanny(userId, nannyId) {
    validateUserId(userId)
    if (typeof nannyId !== 'undefined') validateUserNannyId(nannyId)

    
    return User.findById(userId).lean()
        

        .then(user => {
            if (!user) throw new ExistenceError(`user with id ${userId} not found`)

            
            // if (!parent) throw new ExistenceError(`parent for user id ${userId} not found`)

            let promise

            if (nannyId && user.role === 'parent')
                promise = Promise.all([Nanny.findById(nannyId).populate('user', '-__v').select('-__v').lean(),Parent.findOne({ user: userId }).lean(), Chat.find({ users: userId }).lean()])
            else
                promise = Nanny.findOne({ user: userId }).populate('user', '-__v').select('-__v').lean()

            return promise
                .then((returnedPromise) => {
                    let nanny, parent, chats
                    
                    if (nannyId && user.role === 'parent'){
                        [nanny, parent, chats] = returnedPromise
                    }
                    else{
                        nanny = returnedPromise
                    }
                    if (!nanny) throw new ExistenceError(`nanny with id ${nannyId} not found`)

                    if (user.role === 'nanny' && nanny.user._id.toString() !== userId) throw new CoherenceError(`user id ${userId} with role nanny is not related to nanny with id ${nannyId}`)

                    // sanitize
                 
                    nanny.id = nanny._id.toString()
                    nanny.user.id = nanny.user._id.toString()
                    nanny.availabilities.forEach(availability => {
                        availability.id = availability._id.toString()
                        delete availability._id
                    })

                    delete nanny._id
                    delete nanny.user._id
                    
                    // const chat = chats.find(chat => chat.users.map(userId=> userId.toString()).includes(nanny.user.id))
                    // if(chat){
                    //    nanny.chatId = chat._id.toString() 
                    // }

                    //  if (user.role === 'parent')
                    //     nanny.fav = parent.favs.some(fav => fav.toString() === nanny.id)
                    
                    return nanny
                })
        })
}

module.exports = retrieveNanny