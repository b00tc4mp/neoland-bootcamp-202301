/**
 * Toggles the likeability of a specific sticky
 * 
 * @param {string} userId The userId
 * @param {string} stickyId The sticky identifier
 * @param {string} callback The function to call when the like is changed (or failed)
 */
function toggleLikeSticky(userId, stickyId, callback) {
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr
        
            const payload = JSON.parse(response)

            const { error } = payload

            callback(new Error(error))

            return
        }

        callback(null)
    }

    xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/likes`)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)

    xhr.send()
}

export default toggleLikeSticky