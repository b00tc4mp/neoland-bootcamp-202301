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

        const businessName = event.target.businessName.value
        const age = parseInt(event.target.age.value)
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(businessName, age, email, password, error => {
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

    </Container>
}

export default Register