import { validatePassword, validateCallback, validateToken, validateNewEmail, ClientError, ServerError, ExistenceError, AuthError } from 'com'
/**
 * Updates the user password
 * 
 * @param {string} token The session token
 * @param {string} newEmail The user new email
 * @param {string} password The user password
 * @param {function} callback The function to call when the update is complete (or fails)
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
    xhr.onerror = () => callback(new Error('Network error'))

    xhr.open('PATCH', 'http://localhost:8080/users/email') //patch actualizar
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { newEmail, password }
    const json = JSON.stringify(payload)
    xhr.send(json)
}

export default updateUserEmail