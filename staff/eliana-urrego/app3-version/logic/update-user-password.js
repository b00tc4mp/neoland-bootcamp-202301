/**
 * Updates the user password
 * 
 * @param {string} email The user email
 * @param {string} currentPassword The user current password
 * @param {string} newPassword The user new password
 * @param {string} newPasswordConfirm The confirmation of the new password
 */

function updateUserPassword(email, currentPassword, newPassword, newPasswordConfirm) {
    var user = users.find(user => user.email === email)
    
    //case 1
    if (!user) throw new Error('user with email ' + email + ' not found')

    //case 2
    if (user.password !== currentPassword) throw new Error('wrong credentials')

    //case 3
    if (newPassword !== newPasswordConfirm) throw new Error('the new password does not match with the confirmation password')

    //case 4
    if (currentPassword === newPassword) throw new Error('the new password is exactly the same than the old one')

    //case 5
    if (newPassword.length < 8) throw new Error('new password length is lower than 8 characters')

    //case 6
    if (newPassword.includes(' ')) throw new Error('new password has spaces on it')

    user.password = newPassword
}
