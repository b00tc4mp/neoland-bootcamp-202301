const { validateToken, validateNewEmail, validatePassword, validateCallback } = require('com')

/**
 * Updates the user password
 * 
 * @param {string} token The token
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
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new Error(error))

            return
        }

        callback(null)
    }
    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('PATCH', 'http://localhost:8080/users/email',)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { newEmail, password }
    const json = JSON.stringify(payload)
    xhr.send(json)
}

export default updateUserEmail