const { validateToken, validateCallback, validateAuctionId, ExistenceError, ServerError, ClientError } = require('com')

/**
 * 
 * @param {string} auctionId the id of the auction
 * @param {string} token the token the user belongs
 * @param {function} callback the funcion to call
 */
function retrieveAuctionBids(auctionId, token, callback) {
    validateAuctionId(auctionId)
    validateToken(token)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

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
    xhr.open('GET', `http://localhost:8080/auctions/${auctionId}/bids`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)

    xhr.send()
}

export default retrieveAuctionBids