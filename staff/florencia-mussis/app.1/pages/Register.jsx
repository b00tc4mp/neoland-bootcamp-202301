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
      registerUser(name, age, email, password, error => {
        if (error) {
          setFeedback(error.message)

          return
        }
        
        props.onNavigateToLogin()
      })
    } catch (error) {
      setFeedback(error.message)
    }
  }

  const handleNavigateToLogin = event => {
    event.preventDefault()

    props.onNavigateToLogin()
  }

  return <main className="h-full bg-purple-300 flex flex-col items-center justify-center gap-2">
    <form className="bg-white w-1/4 h-3/4 flex flex-col items-center justify-center rounded-2xl border-white gap-8 drop-shadow-2xl" onSubmit={handleSubmit}>

      <h1>REGISTER</h1>

      <div className="form-inner flex flex-col justify-center gap-2">
        <label htmlFor="name">Name</label>
        <input type="name" id="name" className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" required />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="border-2 rounded-md w-56 drop-shadow-sm focus:outline-purple-300" required />

        <div className="checkbox pt-4">
          <input type="checkbox" id="conditions" />
          <label htmlFor="conditions" className="text-xs"> Acepto los términos y condiciones</label>
        </div>
      </div>

      <button type="submit" className="bg-purple-300 border-2 rounded-md text-white w-40 drop-shadow-sm">Create account</button>
    </form>
    <p className="feedback">{feedback}</p>
    <div className="pt-4 text-sm">
      <p className="question">¿Tienes una cuenta?<a className="text-white" href="" onClick={handleNavigateToLogin}> Login</a></p>
    </div>
  </main>
}