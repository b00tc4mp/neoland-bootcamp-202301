import { validateEmail, validatePassword, validateCallback, ClientError, ServerError, AuthError, ExistenceError } from 'com'

/**
 * Authenticates a user against database
 * 
 * @param {string} email The user's email address
 * @param {string} password The user's password
 * @param {function} callback The callback
 */
function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 400) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new ClientError(error))

            return
        } else if (status === 401) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new AuthError(error))

            return
        } else if (status === 404) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new ExistenceError(error))

            return
        } else if (status === 500) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new ServerError(error))

            return
        }

        const { response } = xhr

        const body = JSON.parse(response)

        const { token } = body

        callback(null, token)
    }

    xhr.onerror = () => callback(new Error('Network error'))

    xhr.open('POST', 'http://localhost:8080/users/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const credentials = { email, password }
    const json = JSON.stringify(credentials)
    xhr.send(json)
}

export default authenticateUser