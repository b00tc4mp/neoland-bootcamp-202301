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

    return <main className="mx-12 bg-neutral-300  w-96">

        <form className="gap-2 rounded-lg border-double border-4 border-neutral-400  flex flex-col items-center" onSubmit={handleSubmit}>

            <img src="https://cdn-icons-png.flaticon.com/128/9428/9428909.png"></img>

            <label htmlFor="name">Your username</label>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="text" placeholder="Enter username" id="name" />

            <label htmlFor="password">choose a pasword<sup>*</sup></label>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" placeholder="pasword" id="password" />


            <label htmlFor="age">age</label>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="number" placeholder="Enter age" id="age" />

            <label htmlFor="email">Email adress</label>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="email" placeholder="email" id="email" />

            <button type="submit">Sing me up!</button>
        <p className="feedback">{feedback} </p>
        <p>or <a href="" onClick={handleNavigateToLogin}>Register</a></p>
        </form>

    </main>





}

