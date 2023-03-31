import { validateToken, validatePassword, validateCallback, ClientError, ServerError, AuthError, ExistenceError } from 'com'
/**
 * Unregister a user in the databases
 * 
 * @param {string} userId The user id
 * @param {string} password The user password
 * @param {function} callback The funtcion to call when the user is unregistered (or falling)
 */
function unregisterUser(token, password, callback) {
    validateToken(token)
    validatePassword(password)
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
            else if (status === 401)
                callback(new AuthError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('DELETE', 'http://localhost:8080/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { password }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default unregisterUser