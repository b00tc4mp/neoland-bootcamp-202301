const { validateToken, validatePassword, validateCallback } = require('com')
function unregisterUser(token, password, callback) {
    validateToken(token)
    validatePassword(password)
    validateCallback(callback)
   
    const xhr = new XMLHttpRequest()
 
     xhr.onload =()=> {
      const {status}= xhr
  
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
 
   xhr.open('DELETE', 'http://localhost:8080/users')
   xhr.setRequestHeader('Authorization', 'Bearer ' + token)
   xhr.setRequestHeader('Content-Type', 'application/json')
  const payload= {password}
  const json = JSON.stringify(payload)
  xhr.send(json)
  
 
    
 }
 export default unregisterUser
 