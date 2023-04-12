const { validateToken, validateStickyId, validateCallback, ClientError, ServerError, ExistenceError } = require('com')
/**
 * toggles the likeability of specific sticky
 * @param {string } token the user email
 * @param {string} stickyId the sticky identifier
 * @param {function} callback the callback
 */
function toggleLikeSticky(token, stickyId, callback) {
    validateToken(token)
    validateStickyId(stickyId)
    validateCallback(callback)
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 201) {
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