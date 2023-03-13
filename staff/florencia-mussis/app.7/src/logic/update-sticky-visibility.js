import { validateCallback, validateStickyId, validateVisibility, validateToken } from 'com'

function updateStickyVisibility(token, stickyId, visibility, callback) {
  validateToken(token)
  validateStickyId(stickyId)
  validateVisibility(visibility)
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
  
  xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/visibility`)
  xhr.setRequestHeader('Authorization', `Bearer ${token}`)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const payload = { visibility }
  const json = JSON.stringify(payload)
  xhr.send(json)
}

export default updateStickyVisibility