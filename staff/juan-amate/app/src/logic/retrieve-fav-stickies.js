import { validateToken, validateCallback } from 'com'

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
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new Error(error))

            return
        }

        const { response } = xhr

        const stickies = JSON.parse(response)

        callback(null, stickies.reverse())
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('GET', 'http://localhost:8080/stickies/favs')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}


export default retrieveFavStickies