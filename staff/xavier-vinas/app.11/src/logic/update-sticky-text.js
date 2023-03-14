const { validateToken, validateStickyId, validateText, validateCallback } = require('com')

/**
 * Updates the sticky text
 * 
 * @param {string} token The user id
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
    const { status } = xhr

    if (status === 500) {
      const { response } = xhr

      const payload = JSON.parse(response)

      const { error } = payload

      callback(new Error(error))

      return
    }

    callback(null)
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