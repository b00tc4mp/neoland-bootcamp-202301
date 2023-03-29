const { validateToken, validateText, validateVisibility, ClientError, ServerError, ExistenceError } = require('com')

/**
 * Creates a new sticky in the database
 * 
 * @param {string} token The session token
 * @param {string} text The text of the sticky
 * @param {string} visibility The visibility of the sticky
 */
function createSticky(token, text, visibility, callback) {
    validateToken(token)
    validateText(text)
    validateVisibility(visibility)

    return fetch(`${process.env.REACT_APP_API_URL}/stickies`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify({ text, visibility })
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
            } else if (status === 201) {
                return
            }
        })
}

export default createSticky