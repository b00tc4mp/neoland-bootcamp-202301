const { validateToken, validateCallback, ClientError, ServerError, ExistenceError } = require('com')

/**
 * Retrieves all the contracts that belong to the specified user (email)
 * 
 * @param {string} token The session token
 * @param {function} callback The function to call back with the contracts (or an error)
 */
function retrieveContracts(token, callback) {
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            const contracts = body.reverse()

            contracts.forEach(contract => {
                contract.date = new Date(contract.date)
                contract.eventDate = new Date(contract.eventDate)
            })

            callback(null, contracts)
        } else {
            const { error } = body

            if (status === 400)
                callback(new ClientError(error))
            else if (status === 404)
                callback(new ExistenceError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('GET', 'http://localhost:8080/contracts')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default retrieveContracts