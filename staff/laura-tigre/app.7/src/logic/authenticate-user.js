import { validateEmail, validatePassword, validateCallback } from 'com'
/**
 * 
 * @param {string} email the user email that I registered
 * @param {string} password the user pasword that I registered
 * @param {function} callback the callback
 */
function authenticateUser(email, password, callback) {
    validateEmail(email)
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

        const { response } = xhr

        const body = JSON.parse(response)

        const { token } = body

        callback(null, token)
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('POST', 'http://localhost:8080/users/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const credentials = { email, password }
    const json = JSON.stringify(credentials)

    xhr.send(json)

}
export default authenticateUser