import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import Button from '../library/Button'
import Container from '../library/Container'

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

    return <Container TagName="main" className="justify-center bg-black h-screen">
        <Container>
            <Container TagName="form" onSubmit={handleSubmit}>
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="email" placeholder="e-mail" name="email" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="password" placeholder="password" name="password" />

                {/* <button className="font-press border-[2px] border-[gold] text-[gold] p-1" type="submit">Login</button> */}
                <Button type="submit">Login</Button>
            </Container>
            <p className="text-[red] font-odibee">{feedback}</p>
            <p className="text-[gold] font-odibee">or <a className="underline" href="" onClick={handleNavigateToRegister}>Register</a></p>
        </Container>
    </Container>
}

export default Login