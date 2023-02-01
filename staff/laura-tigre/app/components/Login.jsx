function Login() {
    console.log('Login -> render')
    const[feedBack, setFeedback]= React.useState('')
    const handleSubmit = (event) =>{
        event.preventDefault()

        const email= event.target.email.value
        const password= event.target.password.value

        try {
            authenticateUser(email, password)
            alert('user logeado')
        } catch (error) {
            setFeedback(error.message)
        }

    }




    return <div className="center login">
        <main>
            <form onSubmit={handleSubmit}>
                <img className="colorreg" src="img/hello!.png" alt="logo empresa" />
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
            <p className="feedback">{feedBack}</p>
            <p>
                or
                <a href="">Register</a>
            </p>
        </main>
    </div>

}