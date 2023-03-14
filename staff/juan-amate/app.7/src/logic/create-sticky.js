import { validateUserId, validateText, validateVisibility, validateCallback } from 'com'

/**
 * Creates a new sticky in the database
 *
 * @param {string} userId The user id the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 * @param {function} callback
 */
function createSticky(userId, text, visibility, callback) {
  validateUserId(userId)
  validateText(text)
  validateVisibility(visibility)
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

  xhr.open('POST', 'http://localhost:8080/stickies')
  xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
  xhr.setRequestHeader('Content-Type', 'application/json')
  const sticky = { text, visibility }
  const json = JSON.stringify(sticky)
  xhr.send(json)
}

export default createSticky