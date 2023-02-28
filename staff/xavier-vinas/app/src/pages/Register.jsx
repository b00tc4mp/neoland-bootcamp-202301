import { useState } from "react"
import registerUser from "../logic/register-user"
import Button from "../library/Button"
import Container from "../library/Container"



function Register(props) {
    const [feedback, setFeedback] = useState("")

    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const age = event.target.age.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(name, age, email, password, error => {
                if (error) {
                    setFeedback(error.message)

                    return
                }
                props.onNavigateToLogin()
            })

        } catch (error) {
            setFeedback(error.message)
        }
    }

    const handleNavigateToLogin = event => {
        event.preventDefault()

        props.onNavigateToLogin()
    }

    return <Container Tagname="main">
        <Container>
            <Container TagName="form" onSubmit={handleSubmit}>
             
                    <img src="https://cdn-icons-png.flaticon.com/128/9428/9428909.png"></img>

                    <label htmlFor="name">Your username</label>
                    <input className="shadow-lg shadow-black p-1 rounded-full " type="text" placeholder="Enter username" id="name" />

                    <label htmlFor="age">age</label>
                    <input className="shadow-lg shadow-black p-1 rounded-full " type="number" placeholder="Enter age" id="age" />

                    <label htmlFor="email">Email adress</label>
                    <input className="shadow-lg shadow-black p-1 rounded-full " type="email" placeholder="email" id="email" />

                    <label htmlFor="password">choose a pasword<sup>*</sup></label>

                    <input className="shadow-lg shadow-black p-1 rounded-full " type="password" placeholder="pasword" id="password" />
                
                <Button type="submit">Register</Button>

            </Container>

            <p className="feedback">{feedback} </p>
            <p className="flex items-center justify-center gap-2">to <a href="" onClick={handleNavigateToLogin}>Login</a></p>
        </Container>
    </Container>
}

export default Register
