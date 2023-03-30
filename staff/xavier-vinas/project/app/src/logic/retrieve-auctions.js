const {validateToken,  ExistenceError, ServerError, ClientError} = require('com')

/**
 * Retrieves the user public information
 * 
 * @param {string} token The token of the user to retrieve
 
 */
function retrieveAuctions(token) {
    validateToken(token)

    return fetch(`${process.env.REACT_APP_API_URL}/auctions`, {
        method: 'GET',
        headers: {

            'Authorization': `Bearer ${token}`
        },

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
                    .then(payload => payload)

            }
        })
    }
    
    export default retrieveAuctions



    
   
    // const xhr = new XMLHttpRequest()

    // xhr.onload = () => {
    //     const { status, response } = xhr

    //     const body = JSON.parse(response)

    //     if (status === 200) {
    //         callback(null, body)
    //     } else {
    //         const { error } = body

    //         if (status === 400)
    //             callback(new ClientError(error))
    //         else if (status === 404)
    //             callback(new ExistenceError(error))
    //         else if (status === 500)
    //             callback(new ServerError(error))
    //     }
    // }

    // xhr.onerror = () => callback(new Error('network error'))
    // xhr.open('GET', `http://localhost:8080/auctions`)
    // xhr.setRequestHeader('Authorization', `Bearer ${token}`)
 
    // xhr.send()