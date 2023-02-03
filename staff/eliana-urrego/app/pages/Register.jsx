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

            props.onNavigateToLogin()
        }catch(error){
            setFeedback(error.message)
        }
    }

 const handleNavigateToLogin = event => {
    event.preventDefault()
    props.onNavigateToLogin()
 }

    return <main className="register">
    <h1>register</h1>
        <img
            className="resize"
            src="https://cdn-icons-png.flaticon.com/512/2767/2767812.png"
            alt="company logo"/>

        <form onSubmit ={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="name" required />

            <label htmlFor="age">Age</label>
            <input type="number" id="age" placeholder="age" required />

            <label htmlFor="email">Email</label>
            <input type="text" id="email" placeholder="email" required />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="password" requiered />

            <gap></gap>

            <button type="submit-button">Register</button>
        </form>
        <p className="feedback-error">{feedback}</p>
        <p>or <a href="" onClick={handleNavigateToLogin}>Login</a></p>
    </main>
}