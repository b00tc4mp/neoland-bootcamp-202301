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

        } catch (error) {
            setFeedback(error.message)
        }
    }
    const handleNavigateToRegister = event => {
        event.preventDefault()

        props.onNavigateToRegister()
    }

    return <main className="h-screen flex flex-col items-center justfy-center bg-[lightgrey]">
        <h1>Login</h1>
        
            <img
                className="w-12 items-center justfy-center"
                src="https://cdn-icons-png.flaticon.com/512/2767/2767812.png"
                alt="company logo" />

            <form className="flex flex-col items-left justfy-center rounded bg-[#528AAE] h-70 w-60 gap-3 p-6 text-white mt-20 " onSubmit={handleSubmit}>

                <label htmlFor="email">Email address</label>
                <input
                    type="text"
                    id="email"
                    class="border-2"
                    placeholder="email address"
                    required
                />

                <label htmlFor="password">Password</label>
                <input  classNmae="text-black"
                    type="password"
                    id="password"
                    placeholder="your password"
                    required
                />
                <div className="checkbox">
                    <input type="checkbox" className="checkbox" />
                    <label htmlFor="remember password"> Remember me </label>
                </div>
                 
             <button className="bg-[#DB4704] font-['Merriweather'] border-[#528AAE] rounded text-white  p-1 w-16">Login</button>
                
            </form>
        <p className="feedback-error">{feedback}</p>
        <p>or <a href="" onClick={handleNavigateToRegister} className="text underline justify-left">Register</a></p>
    </main>
}