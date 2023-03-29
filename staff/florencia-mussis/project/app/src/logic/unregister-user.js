import { validatePassword, validateToken, ClientError, ServerError, ExistenceError, AuthError } from 'com'

/**
 * Unregisters a user
 * 
 * @param {string} token The session token
 * @param {string} password The user password
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