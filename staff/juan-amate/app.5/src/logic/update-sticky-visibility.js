function updateStickyVisibility(userId, stickyId, visibility, callback) {
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

    xhr.open('PATCH', `http://localhost:8080/stickies/${stickyId}/visibility`)
    xhr.setRequestHeader('Authorization', 'Bearer ' + userId)
    xhr.setRequestHeader('Content-Type', 'application/json')
    const sticky = { visibility }
    const json = JSON.stringify(sticky)
    xhr.send(json)
}

export default updateStickyVisibility