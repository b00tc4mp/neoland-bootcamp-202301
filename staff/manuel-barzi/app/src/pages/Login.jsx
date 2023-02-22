import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'

function Login(props) {
    console.log('Login -> render')

    const [feedback, setFeedback] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password, (error, userId) => {
                if (error) {
                    setFeedback(error.message)

                    return
                }

                sessionStorage.userId = userId
    
                props.onNavigateToHome()
            })

        } catch(error) {
            setFeedback(error.message)
        }
    }

    const handleNavigateToRegister = event => {
        event.preventDefault()

        props.onNavigateToRegister()
    }

    return <main className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="input your e-mail" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="input your password" />

            <button type="submit">Login</button>
        </form>
        <p className="feedback-error">{feedback}</p>
        <p>or <a href="" onClick={handleNavigateToRegister}>Register</a></p>
    </main>
}

export default Login