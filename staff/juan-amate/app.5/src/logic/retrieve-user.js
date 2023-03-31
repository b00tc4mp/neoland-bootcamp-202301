/**
 * Retrieves the user public information
 * 
 * @param {string} userId The userId of the user to retrieve
 * @param {function} callback The function to call back with the user (or an error)
 */
function retrieveUser(userId, callback) {
    const xhr = new XMLHttpRequest()

    xhr.onload = () => {
        const { status } = xhr

        if (status === 500) {
            const { response } = xhr

            const body = JSON.parse(response)

            const { error } = body

            callback(new Error(error))

            return
        }

        const { response } = xhr

        const user = JSON.parse(response)

        callback(null, user)
    }

    xhr.open('GET', 'http://localhost:8080/users')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.send()
}

export default retrieveUser