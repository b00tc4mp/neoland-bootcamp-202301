const { validateToken, validateContractId, validateCallback, ClientError, ServerError, ExistenceError } = require('com')

/**
 * Retrieves the contract that belong to the specified contract ID.
 * 
 * @param {string} token The session token
 * @param {string} contractId The ID of the contract
 * @param {function} callback The function to call back with the contracts (or an error)
 */
function retrieveContract(token, contractId, callback) {
    validateToken(token)
    validateContractId(contractId)
    validateCallback(callback)

    const xhr = new XMLHttpRequest

    xhr.onload = () => {
        const { status, response } = xhr

        const body = JSON.parse(response)

        if (status === 200) {
            callback(null, body)
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

    xhr.open('GET', `http://localhost:8080/contracts/${contractId}`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.send()
}

export default retrieveContract