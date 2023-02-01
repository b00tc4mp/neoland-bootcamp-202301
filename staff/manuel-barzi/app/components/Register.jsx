function Register() {
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
            //alert('user registration successful')
            // TODO navigate to login
        } catch(error) {
            //alert(error.message)
            setFeedback(error.message)
        }
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
        <p>or <a href="">Login</a></p>
    </main>
}