import { validateCallback, validateStickyId, validateColor, validateToken } from 'com'

function changeStickyColor(token, stickyId, color, callback) {
  validateToken(token)
  validateStickyId(stickyId)
  validateColor(color)
  validateCallback(callback)
  
  const xhr = new XMLHttpRequest()

  xhr.onload = () => {
    const { status } = xhr

    if (status === 500) {
      const { response } = xhr

      const body = JSON.parse(response) //CONVIERTE LA RTA EN BODY PARSE

      const { error } = body

      callback(new Error(error))

      return
    }

    callback(null)
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