import { validateToken, validateStickyId, validateCallback, ClientError, ServerError, ExistenceError } from 'com'

/**
 * Toggles the likeability of a specific sticky
 * 
 * @param{string} userId The user id
 * @param{string} stickyId The sticky identifier
 * @param{function} callback
 */
function toggleLikeSticky(token, stickyId, callback) {
    validateToken(token)
    validateStickyId(stickyId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

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
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/likes`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default toggleLikeSticky