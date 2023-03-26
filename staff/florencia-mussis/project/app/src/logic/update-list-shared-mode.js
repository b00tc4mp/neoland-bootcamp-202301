import { validateToken, validateListId, validateSharedId, validateMode, validateCallback, ClientError, ServerError, ExistenceError, CoherenceError } from 'com'


/**
 * Updates the mode the list was shared
 * 
 * @param {string} token The session token
 * @param {string} listId The list id of the list
 * @param {string} sharedId The shared id of the shared
 * @param {function} callback The function to call when the update is complete (or failed)
 */
function updateListSharedMode(token, listId, sharedId, mode, callback) {
  validateToken(token)
  validateListId(listId)
  validateSharedId(sharedId)
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

      else if (status === 409)
        callback(new CoherenceError(error))

      else if (status === 500)
        callback(new ServerError(error))
    }
  }
  xhr.onerror = () => callback(new Error('Network error'))

  xhr.open('PATCH', `http://localhost:8080/lists/${listId}/shareds/${sharedId}/mode`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const payload = { mode }
  const json = JSON.stringify(payload)
  xhr.send(json)
}

export default updateListSharedMode