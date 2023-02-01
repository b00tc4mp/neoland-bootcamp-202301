function Register() {
  const [feedback, setFeedback] = React.useState('')


  const handleSubmit = event => {
    event.preventDefault()

    const name = event.target.name.value
    const age = event.target.age.value
    const email = event.target.email.value
    const password = event.target.password.value

    try {
      registerUser(name, age, email, password)
      setFeedback('')
    } catch (error) {
      setFeedback(error.message)
    }
  }

  return <main className="register">
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>

      <div className="form-inner">
        <label htmlFor="name">Name</label>
        <input type="name" id="name" className="input-text" required />

        <label htmlFor="age">Age</label>
        <input type="number" id="age" className="input-text" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" className="input-text" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="input-text" required />

        <div className="checkbox">
          <input type="checkbox" id="conditions" />
          <label htmlFor="conditions" className="agree">He leído y acepto los términos y condiciones</label>
        </div>
      </div>

      <button type="submit" className="button">Create account</button>
    </form>
    <p className="feedback">{feedback}</p>
    <div className="or">
      <p className="question">¿Tienes una cuenta?<a className="option" href=""> Login</a></p>
    </div>
  </main>
}