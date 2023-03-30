const { validateToken, validateNewEmail, validatePassword, ClientError, ServerError, ExistenceError, AuthError } = require('com')

/**
 * Updates the user password
 * 
 * @param {string} token The session token
 * @param {string} newEmail The user new email
 * @param {string} password The user password
 (or fails)
 */
function updateUserEmail(token, newEmail, password) {
    validateToken(token)
    validateNewEmail(newEmail)
    validatePassword(password)
    
    return fetch(`${process.env.REACT_APP_API_URL}/users/email`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },

        body: JSON.stringify({ newEmail, password})
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
            } else if (status === 200) {
                return
            }
        })
}















    // const xhr = new XMLHttpRequest

    // xhr.onload = () => {
    //     const { status, response } = xhr

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

    // xhr.open('PATCH', 'http://localhost:8080/users/email',)
    // xhr.setRequestHeader('Authorization', `Bearer ${token}`)
    // xhr.setRequestHeader('Content-Type', 'application/json')

    // const payload = { newEmail, password }
    // const json = JSON.stringify(payload)
    // xhr.send(json)

export default updateUserEmail