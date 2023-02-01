function Login(props) {

    const [feedback, setFeedback] = React.useState('')

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password)

            props.onNavigateToHome()

        } catch(error){
            setFeedback(error.message)
        }
    }

    const handleNavigateToRegister = event => {
        event.preventDefault()
        
        props.onNavigateToRegister()
    }

    return <main className="login">
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="form-inner">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" className="input-text" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="input-text" required/>
            </div>

            <button type="submit" className="button">Login</button>
        </form>
        <p className="feedback">{feedback}</p>
        <div className="or">
            <p className="question">¿No tienes una cuenta?<a className="option" href="" onClick={handleNavigateToRegister}> Registrate</a></p>
        </div>
    </main>
}