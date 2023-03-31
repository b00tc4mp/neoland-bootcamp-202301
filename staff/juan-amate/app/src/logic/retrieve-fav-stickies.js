import { validateToken, validateCallback, ClientError, ServerError, ExistenceError } from 'com'

/**
 * Retrieves the user´s stickies.
 * @param {string} userId The user id of the user to retrieve the stickies
 * @param {function} callback The function to call back with the stickies (or an error)
 */
function retrieveFavStickies(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            callback(null, body.reverse())
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

    xhr.open('GET', 'http://localhost:8080/stickies/favs')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}


export default retrieveFavStickies