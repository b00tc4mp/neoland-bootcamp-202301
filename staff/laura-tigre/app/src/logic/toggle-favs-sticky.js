const { validateUserId, validateStickyId, validateCallback } = require('com')
/**
 * toggles the favorite of specific sticky
 * @param {string } userId the user email
 * @param {string} stickyId the sticky identifier
 * @param {function} callback the callback
 */
function toggleFavsSticky(userId, stickyId, callback){
    validateUserId(userId)
    validateStickyId(stickyId)
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

  xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/favs`)
  xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
  xhr.send()

   
}
export default toggleFavsSticky