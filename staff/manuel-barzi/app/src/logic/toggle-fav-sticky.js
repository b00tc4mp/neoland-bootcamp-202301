const { validateUserId, validateStickyId, validateCallback } = require('com')

/**
 * Toggles a favorite sticky
 * 
 * @param {string} userId The userId
 * @param {string} stickyId The sticky identifier
 * @param {string} callback The function to call when the fav is changed (or failed)
 */
function toggleFavSticky(userId, stickyId, callback) {
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

    xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/favs`)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)

    xhr.send()
}

export default toggleFavSticky