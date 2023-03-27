const { validateToken, validateCallback, ClientError, ServerError, ExistenceError } = require('com')
/**
 * 
 * @param {string} email The user's email address
 * @param {string} password The user's password
 * @param {function} callback The callback function
 */
function retrieveAdminUser(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            callback(null, body)
        } else {
            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('GET', 'http://localhost:8080/users/admin')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default retrieveAdminUser
