const { validateUserId, validatePassword, validateNewPassword, validateNewPasswordConfirm, validateCallback } = require('com')

/**
 * Updates the user password
 * 
 * @param {string} userId The user id
 * @param {string} password The user current password
 * @param {string} newPassword The user new password
 * @param {string} newPasswordConfirm The confirmation of the new password
 * @param {function} callback The callback
 */
function updateUserPassword(userId, password, newPassword, newPasswordConfirm, callback) {
    validateUserId(userId)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordConfirm(newPasswordConfirm)
    validateCallback(callback)
    
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

   xhr.open('PATCH', 'http://localhost:8080/users/password') //patch actualizar
   xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
   xhr.setRequestHeader('Content-Type', 'application/json')

   const payload = { password, newPassword, newPasswordConfirm}
   const json = JSON.stringify(payload)
   xhr.send(json)
}

export default updateUserPassword