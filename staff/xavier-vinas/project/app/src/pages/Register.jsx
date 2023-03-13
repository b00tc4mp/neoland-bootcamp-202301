import { useState } from "react"
import registerUser from "../logic/register-user"
import Button from "../library/Button"
import Container from "../library/Container"
import { Link, useNavigate } from "react-router-dom"
import Feedback from '../components/Feedback'


function Register() {
    const navigate = useNavigate()

    const [feedback, setFeedback] = useState("")


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
                navigate("/login")
            })

        } catch (error) {
            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }


    return <Container Tagname="main">
        <Container>
            <Container TagName="form" onSubmit={handleSubmit}>

                <img src="./logo.png"></img>

                <label className="block text-gray-700 font-bold mb-2" htmlFor="name">Your username</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="text" placeholder="Enter username" id="name" />

                <label className="block text-gray-700 font-bold mb-2" htmlFor="age">age</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="number" placeholder="Enter age" id="age" />

                <label className="block text-gray-700 font-bold mb-2" htmlFor="email">Email adress</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="email" placeholder="email" id="email" />

                <label className="block text-gray-700 font-bold mb-2" htmlFor="password">choose a pasword<sup>*</sup></label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="password" placeholder="pasword" id="password" />

                <Button type="submit">Register</Button>

            </Container>

            {feedback && <Feedback message={feedback.message} level={feedback.level} />}
            <p className="flex items-center justify-center gap-2"> or <Link to="/login">Login</Link></p>
        </Container>
    </Container>
}

export default Register
