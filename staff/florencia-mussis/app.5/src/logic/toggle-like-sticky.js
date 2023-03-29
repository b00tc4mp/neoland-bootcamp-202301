import { validateCallback, validateStickyId, validateUserId } from 'com'

function toggleLikeSticky(userId, stickyId, callback){
    validateUserId(userId)
    validateStickyId(stickyId)
    validateCallback(callback)

   const xhr = new XMLHttpRequest()

   xhr.onload = () => {
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback( new Error(error)) 

            return
        }
        
    callback(null)
   }

   xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/likes`)
   xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
   xhr.send()
}

export default toggleLikeSticky