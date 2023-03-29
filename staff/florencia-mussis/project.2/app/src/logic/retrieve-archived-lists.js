const { validateToken, validateCallback, ClientError, ServerError, ExistenceError } = require('com')
/**
 * Retrieves the favorite stickies from user
 * 
 * @param {string} token The token of the user to retrieve the lists from
 * @param {function} callback The function to call back with the lists (or an error)
 */
function retrieveArchivedLists(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {

        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            callback(null, body.reverse())
        } else {
            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }
    
    xhr.onerror = () => callback(new Error('Network error'))

    xhr.open('GET', 'http://localhost:8080/lists/archived')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}
export default retrieveArchivedLists