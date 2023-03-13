/**
 * 
 * @param {string} email the user email that I registered
 * @param {string} password the user pasword that I registered
 * @param {function} callback the callback
 */
function authenticateUser(email, password, callback) {
    const xhr = new XMLHttpRequest
   
    xhr.onload= () => {
        const {status} = xhr

        if(status === 500) {
            const{response} =xhr

            const body= JSON.parse(response)

            const {error}= body

            callback(new Error(error))

            return
        }

        const{response}= xhr

        const body= JSON.parse(response)

        const{userId}= body

        callback(null, userId)
    }

    xhr.open('POST', 'http://localhost:8080/users/auth')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const credentials = { email, password }
    const json = JSON.stringify(credentials)

    xhr.send(json)

}
export default authenticateUser