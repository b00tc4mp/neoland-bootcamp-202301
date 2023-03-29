import { validateCallback, validateToken, ClientError, ServerError, ExistenceError } from 'com'

/**
 * Creates a new list in the database
 * 
 * @param {string} token The session token
 * @param {function} callback The function to call
 */
function createList(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 201) {
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

    xhr.open('POST', 'http://localhost:8080/lists')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    xhr.send()
}

export default createList