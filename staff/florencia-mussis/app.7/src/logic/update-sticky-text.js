import { validateCallback, validateStickyId, validateText, validateToken } from 'com'

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

        const body = JSON.parse(response) //CONVIERTE LA RTA EN BODY PARSE

        const { error } = body
        
        callback( new Error(error))

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