import { useState } from 'react'
import registerUser from '../logic/register-user'
import Button from '../library/Button'
import Container from '../library/Container'

function Register(props) {
    console.log('Register -> render')

    const [feedback, setFeedback] = useState('')

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

    return <Container TagName="main" className="justify-center bg-black h-screen">
        <Container>
            <Container TagName="form" onSubmit={handleSubmit}>
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="name" id="name" placeholder="name" name="name" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="number" id="age" placeholder="age" name="age" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="email" placeholder="e-mail" name="email" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="password" placeholder="password" name="password" />

                {/* <button className="font-press border-[2px] border-[gold] text-[gold] p-1" type="submit">Register</button> */}
                <Button type="submit">Register</Button>
            </Container>
            
            <p className="text-[red] font-odibee">{feedback}</p>
            <p className="text-[gold] font-odibee">or <a className="underline" href="" onClick={handleNavigateToLogin}>Login</a></p>
        </Container>
    </Container>
}

export default Register