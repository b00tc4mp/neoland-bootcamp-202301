import { useState } from 'react'
import authenticateUser from '../logic/authenticate-user'
import Button from '../library/Button'

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

    return <main className="h-screen flex justify-center items-center bg-black h-screen">
        <div className="flex flex-col items-center gap-1">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="email" placeholder="e-mail" name="email" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="password" placeholder="password" name="password" />

                {/* <button className="font-press border-[2px] border-[gold] text-[gold] p-1" type="submit">Login</button> */}
                <Button type="submit">Login</Button>
            </form>
            <p className="text-[red] font-odibee">{feedback}</p>
            <p className="text-[gold] font-odibee">or <a className="underline" href="" onClick={handleNavigateToRegister}>Register</a></p>
        </div>
    </main>
}

export default Login