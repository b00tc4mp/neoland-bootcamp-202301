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

    if (!user) throw new Error('user with email ' + email + ' not found')

    if ( user.password !== currentPassword ) throw new Error ("wrong credentials")

    if (newPassword !== newPasswordConfirm ) throw new Error ("new password does not match the confirmation password")

    if (currentPassword === newPassword ) throw new Error ("new password is equal to current password")
    
    if ( newPassword.length < 8) throw new Error ("new password length is lower than 8 characters")
  
    if ( newPassword.includes(" ")) throw new Error ("new password contains space characters")
  
    user.password = newPassword
}


    
    