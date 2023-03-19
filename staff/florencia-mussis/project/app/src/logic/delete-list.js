import { validateToken, validateListId, validateCallback, ClientError, ServerError, ExistenceError, CoherenceError } from 'com'

function deleteList(token, listId, callback){
    validateToken(token)
    validateListId(listId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const {status, response} = xhr

        if (status === 204) {
            callback(null)
        } else {
            const body = JSON.parse(response)

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
    
    xhr.open('DELETE', `http://localhost:8080/lists/${listId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default deleteList
