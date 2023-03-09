const { validateUserId, validateCallback } = require('com')
/**
 * Retrieves the stickies that belong to the specified user (email)
 * 
 * @param {string} userId The userId of the user to retrieve the stickies from
 * @param {function} callback The function to call back with the stickies (or an error)
 * @return {Array} The stickies that belong to the specified user
 */
function retrieveMyStickies(userId, callback) {
    validateUserId(userId)
    validateCallback(callback)
    const xhr = new XMLHttpRequest()

    xhr.onload=() => {

        const { status } = xhr

        if (status === 500) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new Error(error))

            return
        }

        const { response } = xhr

        const stickies = JSON.parse(response)

        callback(null, stickies)
    }
    xhr.onerror = () => callback(new Error('network error'))
    xhr.open('GET', 'http://localhost:8080/stickies/user')
    xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
    xhr.send()
}
export default retrieveMyStickies