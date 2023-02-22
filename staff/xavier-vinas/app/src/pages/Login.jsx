import { useState } from "react"
import authenticateUser from "../logic/authenticate-user"

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

    return <div className="flex flex-col items-center justify-center ">
        <main>

            <form className="border-double border-4 flex flex-col items-center gap-4 bg-[#d1d5db] mt-10 p-10 rounded-full" onSubmit={handleSubmit}>
                <div className="flex flex-col justify-center gap-2">
                    <img className="" src="https://cdn-icons-png.flaticon.com/128/6239/6239002.png" alt=""></img>

                    <label htmlFor="email">Username </label>
                    <input className="shadow-lg shadow-black p-1 rounded-full " type="email" placeholder="Enter Email" id="email" required />

                    <label htmlFor="password">Pasword</label>
                    <input className="shadow-lg shadow-black p-1 rounded-full " type="password" placeholder="pasword" id="password" required />
                </div>
                <div>
                    <button className="h-7 w-20 rounded-full" type="submit">Login</button>
                </div>
                <p className="flex items-center justify-center gap-2"> {feedback}</p>
                <p className="flex items-center justify-center gap-2">or <a href="" onClick={handleNavigateToRegister}>Register</a></p>
            </form>

        </main>
    </div>


}

export default Login