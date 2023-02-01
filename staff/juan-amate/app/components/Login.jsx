function Login(props) {
    console.log('Login -> render')

    const [feedback, setFeedback] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)
            setFeedback('')
            props.onNavigateToHome()
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const handleNavigateToRegister = event => {
        event.preventDefault()

        props.onNavigateToRegister()
    }

    const handleNavigateToHome = event => {
        event.preventDefault()

        props.onNavigateToHome()
    }

    return <main className="login">
        <img src="images/mylogo.png" alt="logo" className="logo" />
        <h1>Welcome back!</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Input your e-mail" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Input your password" />

            <button type="submit" onClick={handleNavigateToHome}>Login</button>
        </form>
        <p className="feedback">{feedback}</p>
        <a className="remember" onClick={handleNavigateToRegister}>Not a member? Register</a>
    </main>
}