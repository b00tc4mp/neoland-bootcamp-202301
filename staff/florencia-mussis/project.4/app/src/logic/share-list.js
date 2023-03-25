import { validateToken, validateListId, validateEmail, validateMode, validateCallback, ClientError, ServerError, ExistenceError } from 'com'
/**
 * Creates a new sticky in the database
 * 
 * @param {string} token TThe session token
 * @param {string} title The title of the sticky
 *  * @param {function} callback The function  to call
 */

function shareList(token, listId, email, mode, callback) { 
    validateToken(token)
    validateListId(listId)
    validateEmail(email)
    validateMode(mode)
    validateCallback(callback)
    
    const xhr = new XMLHttpRequest()
    
    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 204) {
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
    
    xhr.open('POST', `http://localhost:8080/lists/${listId}/share`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { email, mode }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default shareList