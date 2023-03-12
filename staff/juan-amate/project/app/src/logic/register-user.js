import { validateEmail, validatePassword, validatePasswordConfirm, validateCallback, CoherenceError, ClientError, ServerError } from 'com'

/**
 * 
 * @param {string} email The user´s email address
 * @param {string} password The user´s password
 * @param {string} passwordConfirm Repeat the password
 * @param {function} callback The callback function
 */
function registerUser(email, password, passwordConfirm, callback) {
    validateEmail(email)
    validatePassword(password)
    validatePasswordConfirm(passwordConfirm)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 201) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 409)
                callback(new CoherenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('POST', 'http://localhost:8080/users')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const user = { email, password, passwordConfirm }
    const json = JSON.stringify(user)
    xhr.send(json)
}

export default registerUser
