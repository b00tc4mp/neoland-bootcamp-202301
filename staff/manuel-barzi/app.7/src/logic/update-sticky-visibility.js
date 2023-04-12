const { validateToken, validateStickyId, validateVisibility, validateCallback } = require('com')

/**
 * Updates the sticky visibility
 * 
 * @param {string} token The session token
 * @param {string} stickyId The sticky's id to update
 * @param {string} visibility The sticky visibility
 * @param {function} callback The function to call when the update is complete (or failed)
 */
function updateStickyVisibility(token, stickyId, visibility, callback) {
    validateToken(token)
    validateStickyId(stickyId)
    validateVisibility(visibility)
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

    xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/visibility`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { visibility }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default updateStickyVisibility