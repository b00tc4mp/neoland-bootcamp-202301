import { validateToken, validateCallback } from 'com'

/**
 * Retrieves the user public information
 * 
 * @param {string} userId The userId of the user to retrieve
 * @param {function} callback The function to call back with the user (or an error)
 */
function retrieveUser(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

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

        const user = JSON.parse(response)

        callback(null, user)
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('GET', 'http://localhost:8080/users')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}


export default retrieveUser