const { validateUserId, validateStickyId, validateColor, validateCallback } = require('com')
/**
 * publica los stickies privados
 * 
 *@return {array} the private stickies
 */

function changeStickyColor(userId, stickyId, color, callback) {

  validateUserId(userId)
  validateStickyId(stickyId)
  validateColor(color)
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
  xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/color`)
  xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
  xhr.setRequestHeader('Content-Type', 'application/json')
  const sticky = { color }
  const json = JSON.stringify(sticky)
  xhr.send(json)


}

export default changeStickyColor