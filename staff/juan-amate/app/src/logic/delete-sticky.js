import { validateToken, validateStickyId, validateCallback, ClientError, ServerError, CoherenceError, ExistenceError } from 'com'

/**
 * Deletes the specified sticky by id that belongs to the specified user (by email)
 * 
 * @param {string} userId The id of the user
 * @param {string} stickyId The sticky id of the sticky
 * @param {function} callback
 */
function deleteSticky(token, stickyId, callback) {
  validateToken(token)
  validateStickyId(stickyId)
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

  xhr.onerror = () => callback(new Error('network error'))

  xhr.open('DELETE', `http://localhost:8080/stickies/${stickyId}`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)

  xhr.send()
}

export default deleteSticky