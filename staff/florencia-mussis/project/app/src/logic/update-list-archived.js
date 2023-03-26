import { validateCallback, validateListId, validateArchived, validateToken, ClientError, ServerError, ExistenceError, CoherenceError } from 'com'

/**
 * Updates the archive of the list
 * 
 * @param {string} token The session token
 * @param {string} listId The listId of the list
 * @param {boolean} archive The archive to update
 * @param {function} callback The function to call when the update is complete (or failed)
 */
function updateListArchived(token, listId, archived, callback) {
  validateToken(token)
  validateListId(listId)
  validateArchived(archived)
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

  xhr.open('PATCH', `http://localhost:8080/lists/${listId}/archived`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const payload = { archived }
  const json = JSON.stringify(payload)
  xhr.send(json)
}

export default updateListArchived