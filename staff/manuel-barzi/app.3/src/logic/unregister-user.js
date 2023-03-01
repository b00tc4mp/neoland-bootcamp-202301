/**
 * Unregisters a user
 * 
 * @param {string} userId The userId address of the user
 * @param {string} password The user password
 * @param {callback} callback The function to call when the user is unregistered (or failed)
 */
function unregisterUser(userId, password, callback) {
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

    xhr.open('DELETE', 'http://localhost:8080/users')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { password }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default unregisterUser