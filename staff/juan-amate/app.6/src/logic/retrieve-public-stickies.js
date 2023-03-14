import { validateUserId, validateCallback } from 'com'

/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @param {function} callback The function to call back with stickies (or an error)
 * @return {array} The public stickies
 */
function retrievePublicStickies(userId, callback) {
    validateUserId(userId)
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

    xhr.open('GET', 'http://localhost:8080/stickies')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.send()
}

export default retrievePublicStickies

