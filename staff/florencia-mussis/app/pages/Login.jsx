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

        } catch(error){
            setFeedback(error.message)
        }
    }

    const handleNavigateToRegister = event => {
        event.preventDefault()
        
        props.onNavigateToRegister()
    }

    return <main className="h-full bg-purple-300 flex flex-col items-center justify-center gap-2">
        <form className="bg-white w-1/5 h-1/2 flex flex-col items-center justify-center rounded-2xl border-white gap-8 drop-shadow-2xl" onSubmit={handleSubmit}>
            <h1>LOGIN</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" className="border-2 rounded-md w-48 drop-shadow-sm focus:outline-purple-300" required/>

                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="border-2 rounded-md w-48 drop-shadow-sm focus:outline-purple-300" required/>
            </div>

            <button type="submit" className="bg-purple-300 border-2 rounded-md text-white w-20 drop-shadow-sm">Login</button>
        </form>
        <p className="feedback">{feedback}</p>
        <div className="pt-4 text-sm">
            <p className="question">¿No tienes una cuenta?<a className="option text-white" href="" onClick={handleNavigateToRegister}> Registrate</a></p>
        </div>
    </main>
}