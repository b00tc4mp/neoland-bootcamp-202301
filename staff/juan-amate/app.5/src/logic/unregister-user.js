/**
 * Unregister a user and the stickies in the databases
 * 
 * @param {string} userId The user id
 * @param {string} password The user password
 * @param {function} callback The funtcion to call when the user is unregistered (or falling)
 */
function unregisterUser(userId, password, callback) {
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

        callback(null)
    }

    xhr.open('DELETE', 'http://localhost:8080/users')
    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)
    xhr.setRequestHeader('Content-Type', 'application/json')

    const payload = { password }
    const json = JSON.stringify(payload)

    xhr.send(json)
}

export default unregisterUser