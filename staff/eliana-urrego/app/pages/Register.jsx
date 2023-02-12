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
            registerUser(name, age, email, password)

            props.onNavigateToLogin()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const handleNavigateToLogin = event => {
        event.preventDefault()

        props.onNavigateToLogin()

    }
    return <main className="h-screen flex flex-col items-center justfy-center bg-[lightgrey]">
        <h1>register</h1>
        <img
            className="w-12 items-center justfy-center"
            src="https://cdn-icons-png.flaticon.com/512/2767/2767812.png"
            alt="company logo" />

        <form className="flex flex-col items-left justfy-center rounded bg-[#528AAE] h-70 w-60 gap-2 p-6 text-white mt-20 " onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" class="border-2" placeholder="name" required />

            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="age" required />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" requiered />

            <button className="bg-[#DB4704] font-['Merriweather'] border-[#528AAE] rounded text-white  p-1 w-20 flex flex-col items-center">Register</button>
        </form>
        <p className="feedback-error">{feedback}</p>
        <p>or <a href="" onClick={handleNavigateToLogin} className="text underline justify-left">Login</a></p>
    </main>
}