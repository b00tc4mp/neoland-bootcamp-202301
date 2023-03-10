const { validateToken, validateStickyId, validateCallback } = require('com')

/**
 * Deletes the specified sticky by id that belongs to the specified user (by token)
 * 
 * @param {string} token The session token
 * @param {string} stickyId The sticky id of the sticky
 * @param {callback} callback The function to call when the sticky is deleted (or failed)
 */
function deleteSticky(token, stickyId, callback) {
    validateToken(token)
    validateStickyId(stickyId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr
        
            const payload = JSON.parse(response)

            const { error } = payload

            callback(new Error(error))

            return
        }

        callback(null)
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('DELETE', `http://localhost:8080/stickies/${stickyId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default deleteSticky