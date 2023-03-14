import { useState } from 'react'
import registerUser from '../logic/register-user'
import Button from '../library/Button'
import Container from '../library/Container'
import { SquaresPlusIcon } from '@heroicons/react/24/solid'
import { Link, useNavigate } from 'react-router-dom'

function Register(props) {
    console.log('Register -> render')

    const navigate = useNavigate()

    const [feedback, setFeedback] = useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const age = parseInt(event.target.age.value)
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(name, age, email, password, error => {
                if (error) {
                    setFeedback(error.message)

                    return
                }

                navigate('/login')
            })
        } catch (error) {
            setFeedback(error.message)
        }
    }

    return <Container>
        <Container TagName="form" onSubmit={handleSubmit} className="my-20 h-screen" >
            <SquaresPlusIcon className="h-16 text-blue-500" />
            <h1 className="text-blue-900 text-3xl py-4 font-quicksand">Register</h1>
            <div className="max-w-1/2 flex flex-col gap-3">
                <label className="text-gray-500" htmlFor="name">Name</label>
                <input className="bg-sky-100 border border-black mb-1 p-1 rounded-md text-gray-500 text-sm italic" type="name" id="name" placeholder="Input your name" />

                <label className="text-gray-500" htmlFor="age">Age</label>
                <input className="bg-sky-100 border border-black mb-1 p-1 rounded-md text-gray-500 text-sm italic" type="number" id="age" placeholder="Input your age" />

                <label className="text-gray-500" htmlFor="email">E-mail</label>
                <input className="bg-sky-100 border border-black mb-1 p-1 rounded-md text-gray-500 text-sm italic" type="email" id="email" placeholder="Input your e-mail" />

                <label className="text-gray-500" htmlFor="password">Password</label>
                <input className="bg-sky-100 border border-black mb-3 p-1 rounded-md text-gray-500 text-sm italic" type="password" id="password" placeholder="Input your password" />
            </div>
            <Button TagName="button" type="submit">Register</Button>
            <p className="text-red-500 p-3">{feedback}</p>

            <p className="text-sm text-blue-900 hover:underline cursor-pointer" ><Link to='/login'>Do you have an account? Login</Link></p>
        </Container>
    </Container>
}

export default Register