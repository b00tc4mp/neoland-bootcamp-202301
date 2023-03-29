import { validateName, validateAge, validateEmail, validatePassword, ClientError, ServerError, CoherenceError } from 'com'

/**
 * Registers a user in the database
 * 
 * @param {string} name The user full name
 * @param {number} age The user age
 * @param {string} email The user email
 * @param {string} password The user password
 */
function registerUser(name, age, email, password) {
  validateName(name)
  validateAge(age)
  validateEmail(email)
  validatePassword(password)

  return fetch(`${process.env.REACT_APP_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, age, email, password })
  })
    .then(response => {
      const { status } = response

      if (status === 400) {
        return response.json()
          .then(payload => {
            const { error } = payload

            throw new ClientError(error)
          })
      } else if (status === 409) {
        return response.json()
          .then(payload => {
            const { error } = payload

            throw new CoherenceError(error)
          })
      } else if (status === 500) {
        return response.json()
          .then(payload => {
            const { error } = payload

            throw new ServerError(error)
          })
      } else if (status === 201) {
        return
      }
    })
}




export default registerUser