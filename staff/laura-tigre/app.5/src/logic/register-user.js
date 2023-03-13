import{validateName, validateAge, validateEmail,validatePassword,validateCallback} from 'com'
/**
 * Registers a user in the database
 * 
 * @param {string} name The user full name
 * @param {number} age The user age
 * @param {string} email The user email
 * @param {string} password The user password
 * @param {function} callback The callback
 */
function registerUser(name, age, email, password, callback) {
    validateName(name)
    validateAge(age)
    validateEmail(email)
    validatePassword(password)
    validateCallback(callback)

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
        callback(null)
    }

    xhr.open('POST', 'http://localhost:8080/users')
    xhr.setRequestHeader('Content-Type', 'application/json')

    const user = { name, age, email, password }
    const json = JSON.stringify(user)

    xhr.send(json)



}
export default registerUser
