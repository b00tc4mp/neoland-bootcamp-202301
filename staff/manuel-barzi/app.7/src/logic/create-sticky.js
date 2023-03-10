const { validateToken, validateText, validateVisibility } = require('com')

/**
 * Creates a new sticky in the database
 * 
 * @param {string} token The session token
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 * @param {function} callback The function to call when the sticky is created (or failed)
 */
function createSticky(token, text, visibility, callback) {
    validateToken(token)
    validateText(text)
    validateVisibility(visibility)

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

    xhr.open('POST', 'http://localhost:8080/stickies')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { text, visibility }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default createSticky