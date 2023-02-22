function Login(props) {
    console.log('Login -> render')

    const [feedback, setFeedback] = React.useState('')

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

    return <main className="">
            <form className="flex flex-col items-center my-40 h-screen" onSubmit={handleSubmit}>
                <img src="images/mylogo.png" alt="logo" className="w-20 py-4" />
                <h1 className="text-blue-900 text-3xl py-4">Welcome back!</h1>
                <div className="max-w-1/2 flex flex-col gap-3">
                    <label className="text-gray-500" htmlFor="email">E-mail</label>
                    <input className="bg-sky-100 border border-black mb-3 p-1 rounded-md text-gray-500 text-sm italic" type="email" id="email" placeholder="Input your e-mail" />

                    <label className="text-gray-500" htmlFor="password">Password</label>
                    <input className="bg-sky-100 border border-black mb-4 p-1 rounded-md text-gray-500 text-sm italic" type="password" id="password" placeholder="Input your password" />
                </div>
                <button className="bg-blue-600 text-white font-semibold border border-gray-400 mt-5 p-1 rounded-md w-20" type="submit">Login</button>
                <p className="text-red-500 p-3">{feedback}</p>
                <a className="text-sm text-blue-900 hover:underline cursor-pointer" onClick={handleNavigateToRegister}>Not a member? Register</a>
            </form>
    </main>
}