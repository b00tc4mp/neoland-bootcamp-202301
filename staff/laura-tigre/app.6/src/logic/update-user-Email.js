import{validateUserId, validatePassword,validateNewEmail, validateCallback} from 'com'

function updateUserEmail(userId,password,newEmail, callback) {
    validateUserId(userId)
    validatePassword(password)
    validateNewEmail(newEmail)
    validateCallback(callback)
    const xhr = new XMLHttpRequest
     
    xhr.onload= () => {
        const {status} = xhr
  
        if(status === 500) {
            const{response} =xhr
  
            const body= JSON.parse(response)
  
            const {error}= body
  
            callback(new Error(error))
  
            return
        }
  
  
        callback(null)
    }

    xhr.onerror = () => callback(new Error('network error'))
   
    xhr.open('PATCH','http://localhost:8080/users/updateEmail')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    const payload = {password,newEmail }
    const json = JSON.stringify(payload)
  
    xhr.send(json)
  
  }
  export default updateUserEmail