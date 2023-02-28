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
                    <button className="inline-block rounded border-2 border-danger px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" type="submit">Login</button>
                </div>
                <p className="flex items-center justify-center gap-2"> {feedback}</p>
                <p className="flex items-center justify-center gap-2">or <a href="" onClick={handleNavigateToRegister}>Register</a></p>
            </form>

        </main>
    </div>


}

export default Login