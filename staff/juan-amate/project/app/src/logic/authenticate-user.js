import { validateEmail, validatePassword, validateCallback, ClientError, ServerError, AuthError, ExistenceError } from 'com'

/**
 * Authenticates a user against the database
 * 
 * @param {string} email The user's email address
 * @param {string} password The user's password
 */
function authenticateUser(email, password) {
    validateEmail(email)
    validatePassword(password)

    return fetch(`${process.env.REACT_APP_API_URL}/users/auth`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
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
            } else if (status === 200) {
                return response.json()
                    .then(payload => {
                        const { token } = payload

                        return token
                    })
            }
        })
}

export default authenticateUser

