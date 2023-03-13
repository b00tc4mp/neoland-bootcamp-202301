import { validateCallback, validateStickyId, validateText, validateUserId } from 'com'

function updateStickyText(userId, stickyId, text, callback) {
  validateUserId(userId)
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

  xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/text`)
  xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
  xhr.setRequestHeader('Content-Type', 'application/json')

  const sticky = { text }
  const json = JSON.stringify(sticky)
  xhr.send(json)
}

export default updateStickyText