import { useState } from 'react'
import registerUser from '../logic/register-user'

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

    return <main className="h-screen flex justify-center items-center bg-black h-screen">
        <div className="flex flex-col items-center gap-1">
            <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="name" id="name" placeholder="name" name="name" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="number" id="age" placeholder="age" name="age" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="email" placeholder="e-mail" name="email" />
                <input className="text-[gold] placeholder-[gold] font-odibee bg-[transparent] border-2 border-[gold] focus:outline-none p-1" type="password" placeholder="password" name="password" />

                <button className="logout-button font-press border-[2px] border-[gold] text-[gold] p-1" type="submit">Register</button>
            </form>
            <p className="text-[red] font-odibee">{feedback}</p>
            <p className="text-[gold] font-odibee">or <a className="underline" href="" onClick={handleNavigateToLogin}>Login</a></p>
        </div>
    </main>
}

export default Register