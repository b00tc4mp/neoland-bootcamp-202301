import{validateToken, validateUserProfileId,validateNewExperience,validateCallback ,ClientError, ServerError, ExistenceError, AuthError } from 'com'


/**
 * Updates nanny experience
 * 
 * @param {string} token The session token
 * @param {string} nannyId The nanny identifier
 * @param {string} newExperience The nanny experience
 * @param {function} callback The function to call when the update is complete (or fails)
 */

function updateExperience(token,nannyId,newExperience,callback) {
    validateToken(token)
    validateUserProfileId(nannyId)
    validateNewExperience(newExperience)
    validateCallback(callback)
    const xhr = new XMLHttpRequest
     
    xhr.onload= () => {
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
            else if (status === 401)
                callback(new AuthError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))
   
    xhr.open('PATCH',`http://localhost:8080/nanny/${nannyId}/updateExperience`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    const payload = {newExperience }
    const json = JSON.stringify(payload)
  
    xhr.send(json)
  
  }
  export default updateExperience