const { validateToken, ClientError, ServerError, ExistenceError } = require('com')
/**
 * Retrieve a user by email and password
 * 
 * @param {string} email The user's email address
 * @param {string} password The user's password
 */
function retrieveUser(token) {
    validateToken(token)

    return fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            const { status } = response

            if (status === 400) {
                return response.json()
                    .then(payload => {
                        const { error } = payload

                        throw new ClientError(error)
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

export default retrieveUser
