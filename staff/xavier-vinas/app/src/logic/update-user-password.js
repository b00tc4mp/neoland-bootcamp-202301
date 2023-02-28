/**
 * Updates the user password
 * 
 * @param {string} userId The userId
 * @param {string} currentPassword The user current password
 * @param {string} newPassword The user new password
 * @param {string} newPasswordConfirm The confirmation of the new password
 * @param {function} callback The callback
 */
function updateUserPassword(userId, currentPassword, newPassword, newPasswordRepeat, callback) {
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

    xhr.open('PATCH', 'http://localhost:8080/users')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { currentPassword, newPassword, newPasswordRepeat }
    const json = JSON.stringify(payload)
    xhr.send(json)
}

export default updateUserPassword
