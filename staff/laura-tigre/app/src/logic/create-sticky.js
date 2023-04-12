const { validateToken, validateText, validateVisibility, ClientError, ServerError, ExistenceError } = require('com')

/**
 * Creates a new sticky in the database
 * 
 * @param {string} email The user the sticky belongs to
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 * @param {function} callback the callback
    
 }}
 */
function createSticky(token, text, visibility, callback) {
    validateToken(token)
    validateText(text)
    validateVisibility(visibility)
    const xhr = new XMLHttpRequest()

    xhr.onload =()=> {
        const { status, response } = xhr

        if (status === 201) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
     }

 
    
 
 xhr.onerror = () => callback(new Error('network error'))
 
  xhr.open('POST', 'http://localhost:8080/stickies')
  xhr.setRequestHeader('Authorization', 'Bearer ' + token)
  xhr.setRequestHeader('Content-Type', 'application/json')
  const payload= {text, visibility}
  const json = JSON.stringify(payload)
  xhr.send(json)

}
export default createSticky
