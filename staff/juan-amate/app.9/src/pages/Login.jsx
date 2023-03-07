import { useState } from 'react'
import Container from '../library/Container'
import Button from '../library/Button'
import authenticateUser from '../logic/authenticate-user'
import { SquaresPlusIcon } from '@heroicons/react/24/solid'

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

    return <Container>
        <Container TagName='form' onSubmit={handleSubmit} className="my-20" >

            <SquaresPlusIcon className="h-16 text-blue-500" />

            <h1 className="text-blue-900 text-3xl py-4 font-quicksand">Welcome back!</h1>
            <div className="max-w-1/2 flex flex-col gap-3">
                <label className="text-gray-500" htmlFor="email">E-mail</label>
                <input className="bg-sky-100 border border-black mb-3 p-1 rounded-md text-gray-500 text-sm italic" type="email" id="email" placeholder="Input your e-mail" />

                <label className="text-gray-500" htmlFor="password">Password</label>
                <input className="bg-sky-100 border border-black mb-4 p-1 rounded-md text-gray-500 text-sm italic" type="password" id="password" placeholder="Input your password" />
            </div>
            <Button type="submit">Login</Button>
            <p className="text-red-500 p-3">{feedback}</p>
            <a className="text-sm text-blue-900 hover:underline cursor-pointer" onClick={handleNavigateToRegister}>Not a member? Register</a>
        </Container>
    </Container>
}

export default Login