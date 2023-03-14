import { validateUserId, validateStickyId, validateCallback } from 'com'

/**
 * Deletes the specified sticky by id that belongs to the specified user (by email)
 * 
 * @param {string} userId The id of the user
 * @param {string} stickyId The sticky id of the sticky
 * @param {function} callback
 */
function deleteSticky(userId, stickyId, callback) {
  validateUserId(userId)
  validateStickyId(stickyId)
  validateCallback(callback)

  const xhr = new XMLHttpRequest()

  xhr.onload = () => {
    const { status } = xhr

    if (status === 500) {
      const { response } = xhr

      const body = JSON.parse(response)

      const { error } = body

      callback(new Error(error))

      return
    }

    callback(null)
  }

  xhr.onerror = () => callback(new Error('network error'))

  xhr.open('DELETE', `http://localhost:8080/stickies/${stickyId}`)
  xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
  xhr.send()
}


export default deleteSticky