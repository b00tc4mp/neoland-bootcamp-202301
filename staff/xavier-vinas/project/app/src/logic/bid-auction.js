const { validateAuctionId, validateToken, ServerError, ExistenceError, validateCallback, validateAmount } = require('com')
/**
 * 
 * @param {string} token the token the user belongs
 * @param {string} auctionId the id of the auction
 * @param {number} amount the amount of the user in auction
 * @param {function} callback the function to call
 */



function bidAuction(token, auctionId, amount, callback) {
    validateToken(token)
    validateAuctionId(auctionId)
    validateAmount(amount)
    validateCallback(callback)

    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status, response } = xhr

        if (status === 201) {
            callback(null)
        } else {
            const body = JSON.parse(response)

            const { error } = body

            if (status === 400)
                callback(new ExistenceError(error))
            else if (status === 404)
                callback(new TypeError(error))
            else if (status === 500)
                callback(new ServerError(error))
        }
    }

    xhr.onerror = () => callback(new Error('network error'))

    xhr.open('PATCH', `http://localhost:8080/auctions/${auctionId}/bids`)
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { amount }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default bidAuction