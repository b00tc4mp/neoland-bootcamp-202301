function Register(props) {
    console.log('Register -> render')

    const [feedback, setFeedback] = React.useState('')

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

    return <main className="">
        <form className="flex flex-col items-center my-20 h-screen" onSubmit={handleSubmit}>
            <img src="images/mylogo.png" alt="logo" className="w-20 py-4" />
            <h1 className="text-blue-900 text-3xl py-4">Register</h1>
            <div className="max-w-1/2 flex flex-col gap-3">
                <label className="text-gray-500" htmlFor="name">Name</label>
                <input className="bg-sky-100 border border-black mb-1 p-1 rounded-md text-gray-500 text-sm italic" type="name" id="name" placeholder="Input your name" />

                <label className="text-gray-500" htmlFor="age">Age</label>
                <input className="bg-sky-100 border border-black mb-1 p-1 rounded-md text-gray-500 text-sm italic" type="number" id="age" placeholder="Input your age" />

                <label className="text-gray-500" htmlFor="email">E-mail</label>
                <input className="bg-sky-100 border border-black mb-1 p-1 rounded-md text-gray-500 text-sm italic" type="email" id="email" placeholder="Input your e-mail" />

                <label className="text-gray-500" htmlFor="password">Password</label>
                <input className="bg-sky-100 border border-black mb-3 p-1 rounded-md text-gray-500 text-sm italic" type="password" id="password" placeholder="Input your password" />
            </div>
            <button className="bg-blue-600 text-white font-semibold border border-gray-400 mt-5 p-1 rounded-md w-20" type="submit">Register</button>
            <p className="text-red-500 p-3">{feedback}</p>
            <a className="text-sm text-blue-900 hover:underline cursor-pointer" onClick={handleNavigateToLogin}>Do you have an account? Login</a>
        </form>
    </main>
}