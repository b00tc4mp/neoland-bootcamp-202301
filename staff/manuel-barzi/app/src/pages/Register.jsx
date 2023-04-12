import { useState } from 'react'
import registerUser from '../logic/register-user'
import Button from '../library/Button'
import Container from '../library/Container'
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../components/Feedback'

function Register() {
    console.log('Register -> render')

    const navigate = useNavigate()

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const age = parseInt(event.target.age.value)
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(name, age, email, password, error => {
                if (error) {
                    setFeedback({
                        message: error.message,
                        level: 'error'
                    })

                    return
                }

                navigate('/login')
            })
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }

    return <Container TagName="main" className="justify-center bg-black h-screen">
        <Container>
            <Container TagName="form" onSubmit={handleSubmit}>
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="name" id="name" placeholder="name" name="name" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="number" id="age" placeholder="age" name="age" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="email" placeholder="e-mail" name="email" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="password" placeholder="password" name="password" />

                <Button type="submit">Register</Button>
            </Container>

            {feedback && <Feedback message={feedback.message} level={feedback.level} />}
            
            <p className="text-[gold] font-odibee">or <Link to="/login" className="underline">Login</Link></p>
        </Container>
    </Container>
}

export default Register