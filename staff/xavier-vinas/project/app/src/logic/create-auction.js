const { validateToken, ServerError, ExistenceError  } = require('com')

/**
 * Creates a new sticky in the database
 * 
 * @param {string} token The session token
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 * @param {function} callback The function to call when the sticky is created (or failed)
 */
function createAuction(token, title, description,price,photo,bidRate,startDate,endDate, callback) {
    validateToken(token)
    if (typeof title !== 'string') throw new TypeError('title is not a string')
    if (typeof description !== 'string') throw new TypeError('description is not a string')
    if (typeof price !== 'number') throw new TypeError('price is not a number')
    if (typeof photo !== 'string') throw new TypeError('photo is not a string')
    if (typeof bidRate !== 'number') throw new TypeError('bidRate is not a number')
    if (!(startDate instanceof Date)) throw new TypeError('startDate is not a date')
    if (!(endDate instanceof Date)) throw new TypeError('endDate is not a date')

  

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

    xhr.open('POST', 'http://localhost:8080/auctions')
    xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { title, description, price, photo, bidRate, startDate, endDate }

    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default createAuction