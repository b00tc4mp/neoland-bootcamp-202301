import { validateToken, validateNewEmail, validatePassword, validateCallback, ClientError, ServerError, AuthError, ExistenceError } from 'com'
/**
 * Updates the user email
 * 
 * @param {string} userId The user id
 * @param {string} newEmail The user new email
 * @param {string} password The user password
 * @param {function} callback The callback
 */
function updateUserEmail(token, newEmail, password, callback) {
    validateToken(token)
    validateNewEmail(newEmail)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

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

    xhr.open('PATCH', 'http://localhost:8080/users/email')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { newEmail, password }
    const json = JSON.stringify(payload)
    xhr.send(json)
}


export default updateUserEmail
