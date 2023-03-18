import { useState } from "react"
import authenticateUser from "../logic/authenticate-user"
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../components/Feedback'
import logo from '../img/logo.png'

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

        <Container TagName="form" className="w-1/5 h-1/2 justify-center rounded border border-slate-300 gap-8 drop-shadow-md" onSubmit={handleSubmit}>
            <img src={logo} />
            <Container className="gap-4">
                <input type="email" id="email" name="E-mail" placeholder="E-mail" className="border-2 rounded w-60 focus:outline-teal-500" required />

                <input type="password" id="password" placeholder="Password"  className="border-2 rounded w-60 focus:outline-teal-500" required />
            </Container>
            <Button className="w-24 text-sm h-7 rounded-md" type="submit">LOGIN</Button>
        </Container>

        {feedback && <Feedback message={feedback.message} level={feedback.level} />}

            <p className="pt-4 text-sm">¿No tienes una cuenta?<Link to="/register" className=" text-teal-500"> Registrate</Link></p>
    
    </Container>
}

export default Login