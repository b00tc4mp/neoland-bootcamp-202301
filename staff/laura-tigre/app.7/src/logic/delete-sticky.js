const { validateToken, validateStickyId, validateCallback } = require('com')

function deleteSticky(token, stickyId, callback) {
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

    xhr.open('DELETE', `http://localhost:8080/stickies/${stickyId}`)
    xhr.setRequestHeader('Authorization', 'Bearer ' + token)
    xhr.send()


}
export default deleteSticky
