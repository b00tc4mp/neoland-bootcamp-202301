function Login(props) {
    console.log('Login -> render')

    const [feedback, setFeedback] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)

            sessionStorage.email = email

            props.onNavigateToHome()

        } catch (error) {
            setFeedback(error.message)
        }
    }
    const handleNavigateToRegister = event => {
        event.preventDefault()

        props.onNavigateToRegister()
    }

    return <main className="login">
        <h1>Login</h1>
        
            <img
                className="resize"
                src="https://cdn-icons-png.flaticon.com/512/2767/2767812.png"
                alt="company logo" />

            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email address</label>
                <input
                    type="text"
                    id="email"
                    placeholder="email address"
                    required
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    placeholder="your password"
                    required
                />
                <div className="checkbox">
                    <input type="checkbox" className="checkbox" />
                    <label htmlFor="remember password"> Remember me </label>
                </div>

                <button className="login-button">Login</button>
            </form>
        <p className="feedback-error">{feedback}</p>
        <p>or <a href="" onClick={handleNavigateToRegister}>Register</a></p>
    </main>
}