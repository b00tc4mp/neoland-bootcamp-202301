function Login(props) {
    console.log('Login -> render')
    const[feedBack, setFeedback]= React.useState('')
    const handleSubmit = (event) =>{
        event.preventDefault()

        const email= event.target.email.value
        const password= event.target.password.value

        try {
            authenticateUser(email, password)
            sessionStorage.email= email
            props.onNavigateToHome()
        
            
        } catch (error) {
            setFeedback(error.message)
        }

    }

    const handleNavigateToRegister= event => {
        event.preventDefault()
        props.onNavigateToRegister()
    }


    return <div className="center">
        <main>
            <form onSubmit={handleSubmit}>
                <img className="colorreg" src="public/hello!.png" alt="logo empresa" />
                <legend>My account</legend>

                <div className="container">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your email" required />
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Your password"
                        required
                    />

                    <button className="button" type="submit">login</button>
                </div>
            </form>
            <p className="feedback-error">{feedBack}</p>
            <p>
                or
                <a href="" onClick={handleNavigateToRegister}>Register</a>
            </p>
        </main>
    </div>

}