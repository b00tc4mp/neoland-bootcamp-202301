import { validateToken, validateListId, validateText, validateChecked, validateCallback, ClientError, ServerError, ExistenceError } from 'com'

/**
 * Creates a new item in the list in the database
 *
 * @param {string} token The session token
 * @param {string} listId The listId of the list
 * @param {string} text The text of the element
 * @param {boolean} checked The checked of the element
 * @param {function} callback The function to call
 */
function createItem(token, listId, text, checked, callback) {
    validateToken(token)
    validateListId(listId)
    validateText(text)
    validateChecked(checked)
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
    xhr.onerror = () => callback(new Error('Network error'))

    xhr.open('POST', `http://localhost:8080/lists/${listId}/items`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { text, checked }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default createItem