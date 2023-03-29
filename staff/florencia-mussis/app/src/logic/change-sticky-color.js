import { validateCallback, validateStickyId, validateColor, validateToken, ClientError, ServerError, ExistenceError, CoherenceError } from 'com'

/**
 * Updates the sticky color
 * 
 * @param {string} token The session token
 * @param {string} stickyId The sticky's id to update
 * @param {string} color The sticky color
 * @param {function} callback The function to call when the update is complete (or failed)
 */

function changeStickyColor(token, stickyId, color, callback) {
  validateToken(token)
  validateStickyId(stickyId)
  validateColor(color)
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

  xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/color`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const payload = { color }
  const json = JSON.stringify(payload)
  xhr.send(json)
}

export default changeStickyColor