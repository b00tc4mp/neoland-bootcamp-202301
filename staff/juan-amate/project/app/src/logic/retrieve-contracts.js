const { validateToken, ClientError, ServerError, ExistenceError } = require('com')

/**
 * Retrieves all the contracts that belong to the specified user (email)
 * 
 * @param {string} token The session token
 */
function retrieveContracts(token) {
    validateToken(token)

    return fetch(`${process.env.REACT_APP_API_URL}/contracts`, {
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
                        const contracts = payload.reverse()

                        contracts.forEach(contract => {
                            contract.date = new Date(contract.date)
                            contract.eventDate = new Date(contract.eventDate)
                        })

                        return contracts
                    })
            }
        })
}

export default retrieveContracts