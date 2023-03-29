const { validateUserId, ExistenceError } = require('com')
const { User,Chat} = require('../data/models')

/**
 * retrive the chats of the user
 * @param {string} userId the user identity
 */

function retrieveChats(userId) {
 validateUserId(userId)
 
 return Promise.all([User.findById(userId).lean(), Chat.find({ users: userId })])
 .then(([users, chats])=>{
    if(!users)throw new ExistenceError(`user with id ${userId} not found`)
    if(!chats)throw new ExistenceError(`chat with id ${userId} not found`)

    return chats

 })

}
module.exports = retrieveChats
