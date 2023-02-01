function Login() {
    console.log('Login -> render')

    const [feedback, setFeedback] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        //console.log(email, password)
        try {
            authenticateUser(email, password)
            setFeedback('')
            console.log('ok, logged in')
        } catch(error) {
            setFeedback(error.message)
        }
    }

    return <main className="login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="input your e-mail" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="input your password" />

            <button type="submit">Login</button>
        </form>
        <p className="feedback">{feedback}</p>
        <p>or <a href="">Register</a></p>
    </main>
}