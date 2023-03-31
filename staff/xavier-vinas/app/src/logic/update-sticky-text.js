const { validateToken, validateStickyId, validateText, validateCallback, ClientError, ServerError, ExistenceError, CoherenceError } = require('com')

/**
 * Updates the sticky text
 * 
 * @param {string} token The session token
 * @param {string} stickyId The sticky's id to update
 * @param {string} text The sticky text
 * @param {function} callback The function to call when the update is complete (or failed)
 */
function updateStickyText(token, stickyId, text, callback) {
  validateToken(token)
  validateStickyId(stickyId)
  validateText(text)
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

  xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/text`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const payload = { text }
  const json = JSON.stringify(payload)

  xhr.send(json)
}

export default updateStickyText