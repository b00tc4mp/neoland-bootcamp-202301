import { validateToken, ClientError, ServerError, ExistenceError } from 'com'

/**
 * Creates a new list in the database
 * 
 * @param {string} token The session token
 */
function createList(token) {
    validateToken(token)

    return fetch(`${process.env.REACT_APP_API_URL}/lists`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
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
            } else if (status === 201) {
                return
            }
        })
}

export default createList