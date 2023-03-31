import {
    validateToken,
    validatePassword,
    validateNewPassword,
    validateNewPasswordRepeat,
    ClientError,
    ServerError,
    AuthError,
    ExistenceError
} from 'com'

/**
 * Updates the user password
 * 
 * @param {string} userId The user id
 * @param {string} currentPassword The user current password
 * @param {string} newPassword The user new password
 * @param {string} newPasswordRepeat The confirmation of the new password
 */
function updateUserPassword(token, password, newPassword, newPasswordRepeat, callback) {
    validateToken(token)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordRepeat(newPasswordRepeat)

    return fetch(`${process.env.REACT_APP_API_URL}/users/password`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, newPassword, newPasswordRepeat })
    })
        .then(response => {
            const { status } = response

            if (status === 400) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ClientError(error)
                    })
            } else if (status === 401) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new AuthError(error)
                    })
            } else if (status === 404) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ExistenceError(error)
                    })
            } else if (status === 500) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ServerError(error)
                    })
            } else if (status === 204) {

                return
            }
        })
}

export default updateUserPassword