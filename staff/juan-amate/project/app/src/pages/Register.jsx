import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../components/Feedback'
import registerUser from '../logic/register-user'
import Container from '../library/Container'
import Button from '../library/Button'

function Register() {
    console.log('Register -> render')

    const navigate = useNavigate()

    const [feedback, setFeedback] = useState()

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        const passwordConfirm = event.target.passwordConfirm.value

        try {
            registerUser(email, password, passwordConfirm, error => {
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

    return <Container className='justify-center'>
        <main>
            <Container className='w-screen flex justify-center items-center bg-yellow-600 h-72'>
                <img src='../../images/logo-white.png' />
            </Container>

            <Container TagName='form' onSubmit={handleSubmit} className='flex flex-col items-center'>

                <div className='flex flex-col items-center w-screen'>
                    <input type='email' id='email' placeholder='Email' className='w-2/3 max-w-4/5 px-4 py-2 mt-28 mb-5 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-quicksand' />
                    <input type='password' id='password' placeholder='Password' className='w-2/3 max-w-4/5 px-4 py-2 m-5 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-quicksand ' />
                    <input type='password' id='passwordConfirm' placeholder='Password confirm' className='w-2/3 max-w-4/5 px-4 py-2 mt-5 mb-10 border border-neutral-500 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-500 focus:border-neutral-500 sm:text-base font-quicksand ' />
                </div>
                <Button type='submit' className='px-10 py-21 gap-5'>Create new account</Button>

                {feedback && <Feedback message={feedback.message} level={feedback.level} />}

                <Link to='/login' className='mt-5 text-neutral-500 text-base font-quicksand cursor-pointer'>I already have an account</Link>
            </Container>
        </main >
    </Container>
}

export default Register