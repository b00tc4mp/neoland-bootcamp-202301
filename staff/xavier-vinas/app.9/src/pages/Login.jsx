import { useState } from "react"
import Container from "../library/Container"
import authenticateUser from "../logic/authenticate-user"
import Button from "../library/Button"

function Login(props) {
    const [feedback, setFeedback] = useState("")

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

    return <Container TagName="main">
        <Container>

            <Container TagName="form" onSubmit={handleSubmit}>

                <img className="" src="https://cdn-icons-png.flaticon.com/128/6239/6239002.png" alt=""></img>

                <label htmlFor="email">Username </label>
                <input className="shadow-lg shadow-black p-1 rounded-full " type="email" placeholder="Enter Email" id="email" required />

                <label htmlFor="password">Pasword</label>
                <input className="shadow-lg shadow-black p-1 rounded-full " type="password" placeholder="pasword" id="password" required />


                <Button type="submit">Login</Button>

                <p className="flex items-center justify-center gap-2"> {feedback}</p>
                <p className="flex items-center justify-center gap-2">or <a href="" onClick={handleNavigateToRegister}>Register</a></p>
            </Container>

        </Container>
    </Container>


}

export default Login