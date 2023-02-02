function Login(props) {
    const [feedback, setFeedback] = React.useState("")

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {

            authenticateUser(email, password)
            sessionStorage.email=email
           props.onNavigateToHome()
            
        } catch (error) {
            setFeedback(error.message)

        }

    }
    const handleNavigateToRegister = event =>{
        event.preventDefault()
        props.onNavigateToRegister()
    }
 
    return <main className="login">

        <form onSubmit={handleSubmit}>

            <img src="https://cdn-icons-png.flaticon.com/128/6239/6239002.png" alt=""></img>

            <label htmlFor="email">Username </label>
            <input type="email" placeholder="Enter Email" id="email" required />

            <label htmlFor="password">Pasword</label>
            <input type="password" placeholder="pasword" id="password" required />

            <button  type="submit">Login</button>
        </form>
        <p className="feedback"> {feedback}</p>
        <p>or <a href="" onClick={handleNavigateToRegister}>Register</a></p>

    </main>



}