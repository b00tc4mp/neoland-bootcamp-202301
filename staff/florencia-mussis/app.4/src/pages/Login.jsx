import { useState } from "react"
import authenticateUser from "../logic/authenticate-user"
import Button from '../library/Button'
import Container from '../library/Container'

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
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const handleNavigateToRegister = event => {
        event.preventDefault()

        props.onNavigateToRegister()
    }

    return <Container TagName="main" className="h-screen bg-purple-300 justify-center font-['Montserrat']">

        <Container TagName="form" className="bg-white w-1/5 h-1/2 justify-center rounded-2xl border-white gap-8 drop-shadow-2xl" onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <Container>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" className="border-2 rounded-md w-48 drop-shadow-sm focus:outline-purple-300" required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="border-2 rounded-md w-48 drop-shadow-sm focus:outline-purple-300" required />
            </Container>
            <Button className="w-24" type="submit">Login</Button>
        </Container>
        <p className="feedback">{feedback}</p>
        <div className="pt-4 text-sm">
            <p className="question">¿No tienes una cuenta?<a className="option text-white" href="" onClick={handleNavigateToRegister}> Registrate</a></p>
        </div>
    </Container>
}

export default Login