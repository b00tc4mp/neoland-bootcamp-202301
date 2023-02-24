/**
 * Retrieves the public stickies from all users that publish them
 * 
 * @param {function} callback The function to call back with the stickies (or an error)
 * @return {Array} The public stickies
 */
function retrievePublicStickies(callback) {
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

        const stickies = JSON.parse(response)

        callback(null, stickies)
    }

    xhr.open('GET', 'http://localhost:8080/stickies')
    xhr.send()
}

export default retrievePublicStickies