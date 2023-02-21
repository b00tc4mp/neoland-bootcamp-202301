function Login(props) {
    const [feedback, setFeedback] = React.useState("")

    const handleSubmit = event => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {

            authenticateUser(email, password, (error, userId) => {
                if (error) {
                    setFeedback(error.message)

                    return
                }
                sessionStorage.userId = userId
                
               props.onNavigateToHome()
            })
            
        } catch (error) {
            setFeedback(error.message)

        }

    }
    const handleNavigateToRegister = event =>{
        event.preventDefault()
        props.onNavigateToRegister()
    }
 
    return <main className="mx-12 bg-neutral-300  w-96 " >

        <form className=" gap-2 rounded-lg border-double border-4 border-neutral-400  flex flex-col items-center" onSubmit={handleSubmit}>

            <img className="" src="https://cdn-icons-png.flaticon.com/128/6239/6239002.png" alt=""></img>

            <label htmlFor="email">Username </label>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="email" placeholder="Enter Email" id="email" required />

            <label htmlFor="password">Pasword</label>
            <input className="shadow-lg shadow-black p-1 rounded-full " type="password" placeholder="pasword" id="password" required />

            <button className="p-2 px-10 bg-neutral-400 rounded-full"  type="submit">Login</button>
        <p className="feedback"> {feedback}</p>
        <p className="flex flex-col items-center">or <a href="" onClick={handleNavigateToRegister}>Register</a></p>
        </form>

    </main>



}