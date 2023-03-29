const { validateUserId,validateChatId,ExistenceError } = require('com')
const { User, Chat} = require('../data/models')

/**
 * retrive the chats of the user
 * @param {string} userId the user identity
 * @param {string} chatId the chat identity
 */

function RetrieveChat(userId, chatId) {
   validateUserId(userId)
   validateChatId(chatId)

   return Promise.all([User.findById(userId).lean(), Chat.findById(chatId).lean()])
      .then(([user, chat]) => {
         if (!user) throw new ExistenceError(`user with id ${userId} not found`)
         if (!chat) throw new ExistenceError(`chat with id ${chatId} not found`)

         if (chat._id) {
            chat.id = chat._id.toString()
            delete chat._id
            delete chat.__v

         }
         chat.messages.forEach((message) => {
            message.id = message._id.toString()
            delete message._id
         })

         return chat

      })

}
module.exports = RetrieveChat
