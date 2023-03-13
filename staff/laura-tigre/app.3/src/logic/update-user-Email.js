function updateUserEmail(userId,password,newEmail, callback) {
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
   
    xhr.open('PATCH','http://localhost:8080/users/updateEmail')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')
  
    const payload = {password,newEmail }
    const json = JSON.stringify(payload)
  
    xhr.send(json)
  
  }
  export default updateUserEmail