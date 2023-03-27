import { useState } from "react"
import Container from "../library/Container"
import authenticateUser from "../logic/authenticate-user"
import Button from "../library/Button"
import { Link, useNavigate } from 'react-router-dom'
import Feedback from '../components/Feedback'


function Login() {
    const navigate = useNavigate()

    const [feedback, setFeedback] = useState("")

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

                navigate("/")
            })

        } catch (error) {

            setFeedback({
                message: error.message,
                level: 'error'
            })
        }
    }



    return <Container TagName="main" className="sm: font-['Montserrat'] bg-slate-100 h-full " >
        

            <Container TagName="form" onSubmit={handleSubmit}>

                <div className={"  border-double border-4  border-black"}>
                    <img src="./logo.png"></img>
                </div>

                <label className="sm: block text-gray-700 font-bold mb-2" htmlFor="email">Username </label>
                <input className="sm: shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " type="email"
                    placeholder="Enter Email" id="email" required />

                <label className="sm: block text-gray-700 font-bold mb-2" htmlFor="password">Pasword</label>
                <input className="sm: shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="password" placeholder="pasword" id="password" required />


                <Button type="submit">Login</Button>

                {feedback && <Feedback message={feedback.message} level={feedback.level} />}
                <p className="flex items-center justify-center text-gray-700 font-bold   "><Link to="/register"> Register</Link></p>
            </Container>

    </Container >


}

export default Login