const { validateToken, validatePassword, validateCallback, ClientError, ExistenceError, AuthError, ServerError } = require('com')

/**
 * Unregisters a user
 * 
 * @param {string} token The token address of the user
 * @param {string} password The user password
 * @param {callback} callback The function to call when the user is unregistered (or failed)
 */
function unregisterUser(token, password) {
    validateToken(token)
    validatePassword(password)


    return fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password })
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
            } else if (status === 204) {
                return
            }
        })
}

export default unregisterUser


























    // const xhr = new XMLHttpRequest()

    // xhr.onload = () => {
    //    const { status, response } = xhr

    //     if (status === 204) {
    //         callback(null)
    //     } else {
    //         const body = JSON.parse(response)

    //         const { error } = body

    //         if (status === 400)
    //             callback(new ClientError(error))
    //         else if (status === 404)
    //             callback(new ExistenceError(error))
    //         else if (status === 401)
    //             callback(new AuthError(error))
    //         else if (status === 500)
    //             callback(new ServerError(error))
    //     }
    // }
    // xhr.onerror = () => callback(new Error('network error'))

    // xhr.open('DELETE', 'http://localhost:8080/users')
    // xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    // xhr.setRequestHeader('Content-Type', 'application/json')

    // const payload = { password }
    // const json = JSON.stringify(payload)

    // xhr.send(json)
