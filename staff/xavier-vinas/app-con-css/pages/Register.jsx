function Register(props) {
    const [feedback, setFeedback] = React.useState("")

    const handleSubmit = event => {
        event.preventDefault()

        const name = event.target.name.value
        const pasword = event.target.password.value
        const age = event.target.age.value
        const email = event.target.email.value

        try {
            registerUser(name, pasword, age, email)
            setFeedback("")
        } catch (error) {
            setFeedback(error.message)
        }
    }

    const handleNavigateToLogin = event => {
        event.preventDefault()

        props.onNavigateToLogin()
    }

    return <main className="register">

        <form onSubmit={handleSubmit}>

            <img src="https://cdn-icons-png.flaticon.com/128/9428/9428909.png"></img>

            <label htmlFor="name">Your username</label>
            <input type="text" placeholder="Enter username" id="name" />

            <label htmlFor="password">choose a pasword<sup>*</sup></label>
            <input type="password" placeholder="pasword" id="password" />


            <label htmlFor="age">age</label>
            <input type="number" placeholder="Enter age" id="age" />

            <label htmlFor="email">Email adress</label>
            <input type="email" placeholder="email" id="email" />

            <button type="submit">Sing me up!</button>
        </form>
        <p className="feedback">{feedback} </p>
        <p>or <a href="" onClick={handleNavigateToLogin}>Register</a></p>

    </main>





}

