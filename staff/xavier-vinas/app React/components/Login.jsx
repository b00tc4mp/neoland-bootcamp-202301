function Login(props) {
    const [feedback, setFeedback] = React.useState("")

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.email.value

        try {

            authenticateUser(email, password)
            setFeedback("")
            
        } catch (error) {
            setFeedback(error.message)

        }

    }
    const handleNavigateToRegister = event =>{
        event.preventDefault()
        props.onNavigateToRegister()
    }
    const handleNavigateToHome = event =>{
        event.preventDefault()
        props.onNavigateToHome()
    }
    return <main className="login">

        <form onSubmit={handleSubmit}>

            <img src="https://cdn-icons-png.flaticon.com/128/6239/6239002.png" alt=""></img>

            <label htmlFor="email">Username </label>
            <input type="email" placeholder="Enter Email" id="email" required />

            <label htmlFor="password">Pasword</label>
            <input type="password" placeholder="pasword" id="password" required />

            <button onClick={handleNavigateToHome} type="submit">Login</button>
        </form>
        <p className="feedback"> {feedback}</p>
        <p>or <a href="" onClick={handleNavigateToRegister}>Register</a></p>

    </main>



}