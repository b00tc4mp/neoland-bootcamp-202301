import { validateToken, validatePassword, validateNewPassword, validateNewPasswordRepeat, validateCallback } from 'com'

/**
 * Updates the user password
 * 
 * @param {string} userId The user id
 * @param {string} currentPassword The user current password
 * @param {string} newPassword The user new password
 * @param {string} newPasswordRepeat The confirmation of the new password
 * @param {function} callback The callback
 */
function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {
    validateToken(token)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordRepeat(newPasswordRepeat)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

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

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('PATCH', 'http://localhost:8080/users/password')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { password, newPassword, newPasswordRepeat }
    const json = JSON.stringify(payload)
    xhr.send(json)
}

export default updateUserPassword