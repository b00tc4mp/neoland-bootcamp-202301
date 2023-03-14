import { validateToken, validateStickyId, validateCallback } from 'com'

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

    xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/likes`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default toggleLikeSticky