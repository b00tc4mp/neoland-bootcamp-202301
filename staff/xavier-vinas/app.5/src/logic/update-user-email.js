/**
 * Updates the user password
 * 
 * @param {string} userId The userId
 * @param {string} newEmail The user new email
 * @param {string} password The user password
 * @param {function} callback The function to call when the update is complete (or fails)
 */
function updateUserEmail(userId, newEmail, password, callback) {
    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new Error(error))

            return
        }

        callback(null)
    }

    xhr.open('PATCH', 'http://localhost:8080/users/email',)
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { newEmail, password }
    const json = JSON.stringify(payload)
    xhr.send(json)
}

export default updateUserEmail