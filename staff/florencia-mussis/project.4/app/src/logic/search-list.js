import { validateToken, validateTitle, validateCallback, ClientError, ServerError, ExistenceError, CoherenceError} from 'com'
/**
 * Retrieves the selected list
 * 
 * @param {string} token The session token
 * @param {string} title The list id
 * @param {function} callback The function to call back with the lists (or an error)
 */

function searchList(token, title, callback) {
    validateToken(token)
    validateTitle(title)
    validateCallback(callback)
    
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            callback(null, body)
        } else {
            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 409)
                callback(new CoherenceError(error))    
            else if (status === 500)
                callback(new ServerError(error))
        }
    }
    xhr.onerror = () => callback(new Error('Network error'))
    
    xhr.open('GET', `http://localhost:8080/lists/search?q=${title}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default searchList