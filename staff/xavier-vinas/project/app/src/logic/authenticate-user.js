const { validateEmail, validatePassword, ClientError, ServerError, AuthError, ExistenceError } = require('com')
/**
 * Authenticates a user against database
 * 
 * @param {string} email The user's email address
 * @param {string} password The user's password
 * 
 */

function authenticateUser(email, password) {
  validateEmail(email)
  validatePassword(password)
  
  return fetch(`${process.env.REACT_APP_API_URL}/users/auth`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify({ email, password })
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
        return response.json()
          .then(payload => {
            const { token } = payload

            return token
          })
      }
    })
}

export default authenticateUser







  //   const xhr = new XMLHttpRequest

  //   xhr.onload = () => {
  //     const { status, response } = xhr

  //     const body = JSON.parse(response)

  //     if (status === 200) {
  //       const { token } = body

  //       callback(null, token)
  //     } else {
  //       const { error } = body

  //       if (status === 400)
  //         callback(new ClientError(error))
  //       else if (status === 401)
  //         callback(new AuthError(error))
  //       else if (status === 404)
  //         callback(new ExistenceError(error))
  //       else if (status === 500)
  //         callback(new ServerError(error))
  //     }
  //   }

  //   xhr.onerror = () => callback(new Error('network error'))

  //   xhr.open('POST', 'http://localhost:8080/users/auth')
  //   xhr.setRequestHeader('Content-Type', 'application/json')

  //   const credentials = { email, password }
  //   const json = JSON.stringify(credentials)
  //   xhr.send(json)


