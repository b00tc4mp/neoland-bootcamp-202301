//case 1
/**
 * Updates the user password
 * 
 * @param {string} email The user email
 * @param {string} currentPassword The user current password
 * @param {string} newPassword The user new password
 * @param {string} newPasswordConfirm The confirmation of the new password
 */

function updateUserPassword(email, currentPassword, newPassword, newPasswordConfirm) {
    var password =  users.find(user => user.password === currentpassword)

    if (!password) throw new Error('wrong credentials')

    user.password = newPassword
}

