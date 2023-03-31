import { validateToken, validateNewEmail, validatePassword, ClientError, ServerError, AuthError, ExistenceError } from 'com'
/**
 * Updates the user email
 * 
 * @param {string} userId The user id
 * @param {string} newEmail The user new email
 * @param {string} password The user password
 */
function updateUserEmail(token, newEmail, password) {
    validateToken(token)
    validateNewEmail(newEmail)
    validatePassword(password)

    return fetch(`${process.env.REACT_APP_API_URL}/users/email`, {
        method: 'PATCH',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ newEmail, password })
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

export default updateUserEmail
