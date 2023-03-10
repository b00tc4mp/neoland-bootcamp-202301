import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    console.log('Login -> render')

    const navigate = useNavigate()

    const [feedback, setFeedback] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    setFeedback(error.message)

                    return
                }

                sessionStorage.token = token

                navigate('/')
            })

        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <Container TagName="main" className="justify-center bg-black h-screen">
        <Container>
            <Container TagName="form" onSubmit={handleSubmit}>
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="email" placeholder="e-mail" name="email" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="password" placeholder="password" name="password" />

                <Button type="submit">Login</Button>
            </Container>
            <p className="text-[red] font-odibee">{feedback}</p>
            <p className="text-[gold] font-odibee">or <Link to="/register" className="underline">Register</Link></p>
        </Container>
    </Container>
}

export default Login