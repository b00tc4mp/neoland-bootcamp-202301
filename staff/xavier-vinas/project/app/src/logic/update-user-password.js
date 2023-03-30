const {
    validateToken,
    validatePassword,
    validateNewPassword,
    validateNewPasswordConfirm,
    validateCallback,
    ClientError,
    ServerError,
    ExistenceError,
    AuthError,
} = require('com')

/**
 * Updates the user password
 * 
 * @param {string} token The session token
 * @param {string} password The user current password
 * @param {string} newPassword The user new password
 * @param {string} newPasswordConfirm The confirmation of the new password

 */
function updateUserPassword(token, password, newPassword, newPasswordConfirm, ) {
    validateToken(token)
    validatePassword(password)
    validateNewPassword(newPassword)
    validateNewPasswordConfirm(newPasswordConfirm)


    return fetch(`${process.env.REACT_APP_API_URL}/users/password`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },

        body: JSON.stringify({ password, newPassword, newPasswordConfirm })
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

   


export default updateUserPassword


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

// xhr.open('PATCH', 'http://localhost:8080/users/password',)
// xhr.setRequestHeader('Authorization', `Bearer ${token}`)
// xhr.setRequestHeader('Content-Type', 'application/json')

// const payload = { password, newPassword, newPasswordConfirm }
// const json = JSON.stringify(payload)
// xhr.send(json)