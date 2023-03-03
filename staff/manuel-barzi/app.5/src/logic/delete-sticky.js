const { validateUserId, validateStickyId, validateCallback } = require('com')

/**
 * Deletes the specified sticky by id that belongs to the specified user (by userId)
 * 
 * @param {string} userId The userId address of the user
 * @param {string} stickyId The sticky id of the sticky
 * @param {callback} callback The function to call when the sticky is deleted (or failed)
 */
function deleteSticky(userId, stickyId, callback) {
    validateUserId(userId)
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

    xhr.open('DELETE', `http://localhost:8080/stickies/${stickyId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)

    xhr.send()
}

export default deleteSticky