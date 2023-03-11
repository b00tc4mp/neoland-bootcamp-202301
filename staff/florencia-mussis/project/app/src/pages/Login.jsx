import { useState } from "react"
import authenticateUser from "../logic/authenticate-user"
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'


function Login() {
    console.log('Login -> render')

    const navigate = useNavigate()

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })

                    return
                }

                sessionStorage.token = token

                navigate('/')
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }

    return <Container TagName="main" className="h-screen justify-center font-['Montserrat']">

        <Container TagName="form" className="w-1/5 h-1/2 justify-center rounded-xl border border-slate-300 gap-8 drop-shadow-md" onSubmit={handleSubmit}>
            <h1>MY LISTS</h1>
            <Container className="gap-4">
                <input type="email" id="email" name="E-mail" placeholder="E-mail" className="border-2 rounded-md w-48 focus:outline-sky-500" required />

                <input type="password" id="password" placeholder="Password"  className="border-2 rounded-md w-48 focus:outline-sky-500" required />
            </Container>
            <Button className="w-24" type="submit">LOGIN</Button>
        </Container>
        <p className="feedback">{feedback}</p>
        <div className="pt-4 text-sm">
            <p className="question">¿No tienes una cuenta?<Link to="/register"> Registrate</Link></p>
        </div>
    </Container>
}

export default Login