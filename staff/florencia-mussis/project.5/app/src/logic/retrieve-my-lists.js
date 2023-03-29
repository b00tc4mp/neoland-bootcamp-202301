import { validateCallback, validateToken, ClientError, ServerError, ExistenceError } from 'com'

/**
 * Retrieves the lists that belong to the specified user (email)
 * 
 * @param {string} token The session token
 * @param {function} callback The function to call back with the lists (or an error)
 */
function retrieveMyLists(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        const payload = JSON.parse(response)

        if (status === 200) {
            callback(null, payload.reverse())
        } else {
            const { error } = payload

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }
    xhr.onerror = () => callback(new Error('Network error'))

    xhr.open('GET', 'http://localhost:8080/lists/user')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default retrieveMyLists