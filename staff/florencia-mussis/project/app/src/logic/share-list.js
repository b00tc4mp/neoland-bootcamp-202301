import { validateToken, validateListId, validateEmail, validateMode, validateCallback, ClientError, ServerError, ExistenceError } from 'com'

/**
* Add a user to the shared list
*
* @param {string} token The session token
* @param {string} listId The listId to which the list belongs
* @param {string} email The email address of the user with whom the list will be shared
* @param {string} mode The mode in which the list will be shared
* @param {function} callback The function  to call
 */
function shareList(token, listId, email, mode, callback) {
    validateToken(token)
    validateListId(listId)
    validateEmail(email)
    validateMode(mode)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 204) {
            callback(null)
        } else {
            const body = JSON.parse(response)

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

    xhr.open('POST', `http://localhost:8080/lists/${listId}/share`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { email, mode }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default shareList