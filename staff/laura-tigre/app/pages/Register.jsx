function Register(props) {
    console.log('Register -> render')
    const [feedBack, setFeedback]= React.useState('')
    const handleSubmit = (event) =>{
     event.preventDefault()

     const name= event.target.name.value
     const age= event.target.age.value
     const email= event.target.email.value
     const password= event.target.password

      try {
        registerUser(name, age, email,password)
        setFeedback('')
        props.onNavigateToLogin()

      } catch (error) {
        setFeedback(error.message)
        
      }
    }

    const handleNavigateToLogin= event =>{
      event.preventDefaul()
      props.onNavigateToLogin()
    }



    return <div className="center">
    <main>
      <form onSubmit={handleSubmit}>
        <img className="colorreg" src="img/hello!.png" alt="logo empresa" />
        <legend>Register</legend>

        <div className="container">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your name" required />
          <label htmlFor="age">Age</label>
          <input type="number" id="age" placeholder="Your age" required />
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Your password"required/>
          <div className="accept">
            <input type="checkbox" id="conditions" />
            <label htmlFor="conditions">Accept conditions.</label>
          </div>
          <button className="button" type="submit">Sign in</button>
        </div>
      </form>
      <p className="feedback-error">{feedBack}</p>
      <p>
        or
        <a href=""onClick={handleNavigateToLogin}>Login</a>
      </p>
    </main>
  </div>

}
