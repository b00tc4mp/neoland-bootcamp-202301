import { validateToken, validateListId, validateItemId, validateText, validateCallback, ClientError, ServerError, ExistenceError, CoherenceError } from 'com'

/**
 * Updates the item text
 * 
 * @param {string} token The session token
 * @param {string} listId The listId of the list
 * @param {string} itemId The itemId of the item
 * @param {string} text The text to update
 * @param {function} callback The function to call when the update is complete (or failed)
 */
function updateItemText(token, listId, itemId, text, callback) {
  validateToken(token)
  validateListId(listId)
  validateItemId(itemId)
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
  xhr.onerror = () => callback(new Error('Network error'))

  xhr.open('PATCH', `http://localhost:8080/lists/${listId}/items/${itemId}/text`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const payload = { text }
  const json = JSON.stringify(payload)
  xhr.send(json)
}

export default updateItemText