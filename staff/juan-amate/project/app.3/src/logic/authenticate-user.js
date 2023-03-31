import { validateEmail, validatePassword, validateCallback, ClientError, ServerError, AuthError, ExistenceError } from 'com'
/**
 * Authenticates a user against the database
 * 
 * @param {string} email The user's email address
 * @param {string} password The user's password
 * @param {function} callback The callback function
 */
function authenticateUser(email, password, callback) {
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            const { token } = body

            callback(null, token)
        } else {
            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 401)
                callback(new AuthError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('POST', 'http://localhost:8080/users/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const credentials = { email, password }
    const json = JSON.stringify(credentials)
    xhr.send(json)
}

export default authenticateUser
