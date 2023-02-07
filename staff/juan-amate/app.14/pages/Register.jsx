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

    return <main className="register">
        <img src="images/mylogo.png" alt="logo" className="logo" />
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="name" id="name" placeholder="Input your name" />

            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="Input your age" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Input your e-mail" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Input your password" />

            <button type="submit">Register</button>
        </form>
        <p className="feedback-error">{feedback}</p>
        <a className="remember" onClick={handleNavigateToLogin}>Do you have an account? Login</a>
    </main>
}