const { validateToken, validateStickyId, validateColor, validateCallback } = require('com')

/**
 * Updates the sticky color
 * 
 * @param {string} token The user id
 * @param {string} stickyId The sticky's id to update
 * @param {string} color The sticky color
 * @param {function} callback The function to call when the update is complete (or failed)
 */
function changeStickyColor(token, stickyId, color, callback) {
    validateToken(token)
    validateStickyId(stickyId)
    validateColor(color)
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

    xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/color`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { color }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default changeStickyColor