import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../components/Feedback'
import authenticateUser from '../logic/authenticate-user'
import Container from "../library/Container"
import Button from '../library/Button'

function Login() {
    console.log('Login -> render')

    const navigate = useNavigate()
    const [feedback, setFeedback] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
                .then(token => {
                    sessionStorage.token = token

                    navigate('/')
                })
                .catch(error => setFeedback({
                    message: error.message,
                    level: 'error'
                }))
        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }

    return <Container className='justify-center'>
        <main>
            <Container className='w-screen flex justify-center items-center bg-yellow-600 h-80'>
                <img src='../../images/logo-white.png' />
            </Container>

            <Container TagName='form' onSubmit={handleSubmit} className='flex flex-col items-center w-screen'>

                <div className='flex flex-col items-center'>
                    <input type='email' id='email' placeholder='Email' className='shadow-lg w-4/5 max-w-4/5 px-4 py-2 mt-32 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 focus:shadow-lg sm:text-base font-roboto' />
                    <input type='password' id='password' placeholder='Password' className='shadow-lg w-4/5 max-w-4/5 px-4 py-2 m-12 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 focus:shadow-lg sm:text-base font-robot' />
                </div>
                <Button type='submit' className='px-10 py-21'>Access</Button>

                {feedback && <Feedback message={feedback.message} level={feedback.level} />}

                <Link to='/register' className='mt-3 text-neutral-500 text-base font-quicksand cursor-pointer'>Create new account</Link>
            </Container>
        </main>
    </Container>
}

export default Login