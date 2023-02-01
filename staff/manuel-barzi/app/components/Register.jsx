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
            
            setFeedback('')

            props.onNavigateToLogin()
        } catch(error) {
            setFeedback(error.message)
        }
    }

    const handleNavigateToLogin = event => {
        event.preventDefault()

        props.onNavigateToLogin()
    }

    return <main className="register">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="name" id="name" placeholder="input your name" />

            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="input your age" />

            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="input your e-mail" />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="input your password" />

            <button type="submit">Register</button>
        </form>
        <p className="feedback">{feedback}</p>
        <p>or <a href="" onClick={handleNavigateToLogin}>Login</a></p>
    </main>
}