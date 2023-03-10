const { validateToken, validatePassword, validateCallback } = require('com')

/**
 * Unregisters a user
 * 
 * @param {string} token The token address of the user
 * @param {string} password The user password
 * @param {callback} callback The function to call when the user is unregistered (or failed)
 */
function unregisterUser(token, password, callback) {
    validateToken(token)
    validatePassword(password)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr

            const payload = JSON.parse(response)

            const { error } = payload

            callback(new Error(error))

            return
        }

        callback(null)
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